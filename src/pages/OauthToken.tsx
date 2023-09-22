import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserStatus } from '../store/reducers/userStatus';
import { setCookie } from '../util/Cookie';

const OauthToken = () => {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const dispatch = useDispatch();

  const user = searchParams.get('user');
  const token = searchParams.get('Authorization');
  const refreshToken = searchParams.get('Refresh');
  const accessTokenExpiration = searchParams.get('accessTokenExpiration');
  const refreshTokenExpiration = searchParams.get('refreshTokenExpiration');
  const memberId = searchParams.get('memberId');
  const nickname = searchParams.get('displayName');
  console.log([user, token, refreshToken, memberId, nickname, accessTokenExpiration, refreshTokenExpiration]);
  console.log(new Date());
  console.log(new Date(accessTokenExpiration));
  console.log(new Date(refreshTokenExpiration));

  useEffect(() => {
    // 토큰은 쿠키에 저장
    setCookie('token', token, { path: '/', expires: new Date(accessTokenExpiration) });
    setCookie('refreshToken', refreshToken, { path: '/', expires: new Date(refreshTokenExpiration) });
    // 세션스토리지에 저장(일시적임 창을 닫으면 없어진다.)
    window.sessionStorage.setItem('memberId', memberId);
    // utf-8 디코딩 방법
    window.sessionStorage.setItem('displayName', decodeURIComponent(`${nickname}`));
    // 리덕스 툴킷 상태관리에 user여부 확인
    dispatch(setUserStatus(user));

    if (user === 'false') {
      navigate('/signupcheck');
    } else if (user === 'true') {
      navigate('/');
    }
  }, []);

  return <></>;
};

export default OauthToken;
