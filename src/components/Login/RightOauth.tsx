import { styled } from 'styled-components';
import Oauth from './Oauth';

const RightOauth = () => {
  return (
    <Container>
      <div className="login">로그인과 회원가입을 한번에!</div>
      <Oauth />
    </Container>
  );
};

export default RightOauth;

const Container = styled.div`
  width: 330px;
  margin-left: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .login {
    color: #707070;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 20px;
  }

  .first {
    font-size: 16px;
    font-weight: 700;
    color: #898989;

    margin-right: 24px;
  }
  .twice {
    font-size: 16px;
    font-weight: 700;
    color: #c2c2c2;

    cursor: pointer;
  }
`;
