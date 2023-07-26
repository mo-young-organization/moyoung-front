import { styled } from 'styled-components';
import Title from '../components/Home/Title';
import Box from '../components/Home/Box';

const Home = () => {
  return (
    <Container>
      <Content>
        <Title />
        <Box />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #efefef;
  display: flex;

  justify-content: center;

  width: 100%;
  height: 950px;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
  
  width: 1200px;
  height: 100%;
`
