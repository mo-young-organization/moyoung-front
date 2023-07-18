import { styled } from 'styled-components';
import Title from '../components/Home/Title';
import Box from '../components/Home/Box';

const Home = () => {
  return (
    <Container>
      <Title />
      <Box />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 950px;
`;
