import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

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
  console.log([user, token, refreshToken, memberId, nickname, accessTokenExpiration, refreshTokenExpiration]);

  useEffect(() => {
    if (user === 'false') {
      navigate('/signupcheck');
    }
  }, []);

  return (
    <Con>
      <div>ㅎㅇㅎㅇㅎㅇ</div>
    </Con>
  );
};

export default OauthToken;

const Con = styled.div`
  background-color: red;
`;
