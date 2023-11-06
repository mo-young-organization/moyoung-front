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

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 336px;
    height: 224px;
    margin-left: 0px;

    .login {
      display: none;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 240px;
    height: 180px;
    margin-left: 0px;

    .login {
      display: none;
    }
  }
`;
