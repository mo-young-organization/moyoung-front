import { styled } from 'styled-components';
import { useState } from 'react';

import ChatContent from './ChatContent';
import ChatInfo from './ChatInfo';

const ChatModal = () => {
  const [isChatContentOpen, setIsChatContentOpen] = useState<boolean>(true);
  return <ChatModalWrapper>{isChatContentOpen ? <ChatContent /> : <ChatInfo />}</ChatModalWrapper>;
};

const ChatModalWrapper = styled.div`
  background-color: pink;
  width: 455px;
  height: 700px;
`;

export default ChatModal;
