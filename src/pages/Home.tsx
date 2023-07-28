import { styled } from 'styled-components';
import Title from '../components/Home/Title';
import Box from '../components/Home/Box';
import ChatModal from '../components/Chat/ChatModal';

const Home = () => {
  return (
    <Container>
      <Content>
        <Title />
        <Box />
        <ChatModal />
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 1200px;
  height: 100%;
`;
