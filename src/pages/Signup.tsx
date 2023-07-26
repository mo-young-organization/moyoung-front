import { styled } from 'styled-components';
import LeftTitle from '../components/Signup/LeftTitle';
import RightOauth from '../components/Signup/RightOauth';

const Signup = () => {
  return (
    <Container>
      <Content>
        <LeftTitle />
        <RightOauth />
      </Content>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 1032px;
  height: 550px;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;
