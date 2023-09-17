import axios from 'axios';
import { getCookie, setCookie } from '../util/Cookie';

// 1단계 인스턴스 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

// 2단계 인터셉터 사용

// 요청 인터셉터
// 인터셉터를 이용해서 요청시에 어떤걸 보낼건지 미리 정해줄수 있다 => 보통 로그인받은 토큰을 헤더에 담아 보내준다.
instance.interceptors.request.use(
  request => {
    request.headers['Authorization'] = getCookie('token');
    request.headers['Refresh'] = getCookie('refreshToken');
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
// // ----------------------------------응답 토큰 인터셉터
let isTokenRefreshing = false;
const refreshSubscribers = [];

const onTokenRefreshed = accessToken => {
  refreshSubscribers.map(callback => callback(accessToken));
};

const addRefreshSubscriber = callback => {
  refreshSubscribers.push(callback);
};

// 응답 인터셉터
instance.interceptors.response.use(
  // 성공하면 그대로 그냥 리턴
  response => {
    return response;
  },
  // 실패시 에러 발생으로 처리
  async error => {
    const {
      config,
      response: { status },
    } = error;
    // 에러 코드와 내용으로 조건문 구분
    const originalRequest = config;
    if (status === 401) {
      if (!isTokenRefreshing) {
        // isTokenRefreshing이 false인 경우에만 token refresh 요청
        isTokenRefreshing = true;
        const refreshToken = await getCookie('refreshToken');
        const { data } = await axios.post(
          `http://localhost:3000/refresh/token`, // token refresh api
          {
            refreshToken,
          },
        );
        // 새로운 토큰 저장
        const {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
          accessTokenExpiration: newAccessTokenExpiration,
          refreshTokenExpiration: newRefreshTokenExpiration,
        } = data;
        // ------------새로 저장하면 굳이 삭제를 안해도 되나??(테스트 해봐야 함)
        await setCookie('token', newAccessToken, { path: '/', expires: new Date(newAccessTokenExpiration) });
        await setCookie('refreshToken', newRefreshToken, { path: '/', expires: new Date(newRefreshTokenExpiration) });

        isTokenRefreshing = false;
        axios.defaults.headers.common.Authorization = newAccessToken;
        // 새로운 토큰으로 지연되었던 요청 진행
        onTokenRefreshed(newAccessToken);
      }
      // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
      const retryOriginalRequest = new Promise(resolve => {
        // 여기서 매개변수로 넘겨주는 accessToken은 어디서 받아오는 값이지?
        addRefreshSubscriber(newAccessToken => {
          originalRequest.headers.Authorization = newAccessToken;
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  },
);
