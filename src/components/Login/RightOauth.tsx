import { styled } from 'styled-components';
import Oauth from './Oauth';

const RightOauth = () => {
  return (
    <Container>
      <div className="login">로그인</div>
      <Oauth />
      <div className="signup">
        <span className="first">아직 회원이 아니신가요?</span>
        <span className="twice">회원가입</span>
      </div>
    </Container>
  );
};

export default RightOauth;

const Container = styled.div`
  width: 330px;
  height: 376px;
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
  }
`;
