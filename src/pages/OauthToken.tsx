import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCookie } from '../util/Cookie';

const OauthToken = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

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

    // 스토어 리덕스 툴킷은 좀더 생각해봐야겠다... 멤버 id랑 닉넴임을 굳이 저장해야 되나 싶다..

    if (user === 'false') {
      navigate('/signupcheck');
    }
  }, []);

  return <></>;
};

export default OauthToken;
