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
  background-color: #ffffff;
  width: 856px;
  height: 690px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: orange;
  width: 680px;
  height: 535px;
`;
