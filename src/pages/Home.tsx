import { styled } from 'styled-components';
import { useState } from 'react';
import Title from '../components/Home/Title';
import Box from '../components/Home/Box';
import ChatModal from '../components/Chat/ChatModal';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const openChatModal = () => {
    setIsChatOpen(true);
  };
  const closeChatModal = () => {
    setIsChatOpen(false);
  };

  return (
    <Container>
      <Content>
        <Title />
        <Box />
        <button onClick={openChatModal}>chat modal 열기</button>
        {isChatOpen && <ChatModal closeChatModal={closeChatModal} />}
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
