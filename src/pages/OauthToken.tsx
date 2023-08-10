import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const OauthToken = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const user = searchParams.get('user');
  const token = searchParams.get('Authorization');
  const refreshToken = searchParams.get('Refresh');
  const memberId = searchParams.get('memberId');
  const nickname = searchParams.get('displayName');
  const accessTokenExpiration = searchParams.get('accessTokenExpiration');
  const refreshTokenExpiration = searchParams.get('refreshTokenExpiration');

  useEffect(() => {
    if (user === 'false') {
      navigate('/signupcheck');
    }
  }, []);

  return <></>;
};

export default OauthToken;
