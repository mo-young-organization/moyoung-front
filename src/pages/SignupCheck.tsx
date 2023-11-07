import { styled } from 'styled-components';
import Title from '../components/SignupCheck/Title';
import FormCheck from '../components/SignupCheck/FormCheck';

const SignupCheck = () => {
  return (
    <Container>
      <Content>
        <Title />
        <FormCheck />
      </Content>
    </Container>
  );
};

export default SignupCheck;

const Container = styled.div`
  background-color: #efefef;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 14px;
  background-color: #ffffff;
  width: 856px;
  height: 690px;

  margin: 40px;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 688px;
    height: 687px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    justify-content: space-around;
    width: 320px;
    height: 810px;
  }
`;
