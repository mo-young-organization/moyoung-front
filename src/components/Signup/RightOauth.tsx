import { styled } from 'styled-components';
import Oauth from './Oauth';
import { useNavigate } from 'react-router-dom';

const RightOauth = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login')
  };
  return (
    <Container>
      <div className="signup">회원가입</div>
      <Oauth />
      <div className="login">
        <div className="first">이미 회원이시라면</div>
      </div>
      <div className="login_button" onClick={loginHandler}>
        로그인
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
  /* justify-content: center; */

  .signup {
    color: #707070;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;

    margin-bottom: 44px;
  }

  .login {
    font-size: 14px;
    color: #a8a8a8;
    font-weight: 700;

    margin-bottom: 12px;
  }

  .first {
    font-size: 16px;
    font-weight: 700;
    color: #898989;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
  }

  .first::before {
    content: '';
    margin: 0px 8px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    width: 80px;
  }
  .first::after {
    content: '';
    margin: 0px 8px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    width: 80px;
  }

  .login_button {
    background-color: #525252;
    width: 328px;
    height: 56px;
    border-radius: 8px;
    padding: 16px 30px;

    text-align: center;
    color: #ffffff;
    font-size: 20px;

    cursor: pointer;
  }
`;
