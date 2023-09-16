import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCookie } from '../util/Cookie';

const OauthToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const user = searchParams.get('user');
  const token = searchParams.get('Authorization');
  const refreshToken = searchParams.get('Refresh');
  const memberId = searchParams.get('memberId');
  const nickname = searchParams.get('displayName');
  const accessTokenExpiration = searchParams.get('accessTokenExpiration');
  const refreshTokenExpiration = searchParams.get('refreshTokenExpiration');
  console.log([user, token, refreshToken, memberId, nickname, accessTokenExpiration, refreshTokenExpiration]);
  console.log(new Date());
  console.log(new Date(accessTokenExpiration));
  console.log(new Date(refreshTokenExpiration));

  useEffect(() => {
    //
    setCookie('token', token, { path: '/', expires: new Date(accessTokenExpiration) });
    setCookie('refreshToken', refreshToken, { path: '/', expires: new Date(refreshTokenExpiration) });
    // if (user === 'false') {
    //   navigate('/signupcheck');
    // }

    // tokenSetDispatch(token);
  }, []);

  return <></>;
};

export default OauthToken;
