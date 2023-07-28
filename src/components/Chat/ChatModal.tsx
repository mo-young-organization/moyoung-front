import { styled } from 'styled-components';
import { useState } from 'react';

import ChatContent from './ChatContent';
import ChatInfo from './ChatInfo';
import ChatParticipant from './ChatParticipant';

const ChatModal = () => {
  const [isChatContentOpen, setIsChatContentOpen] = useState<'chat' | 'more' | 'participant'>('chat');
  return (
    <ChatModalWrapper>
      {isChatContentOpen === 'chat' && <ChatContent />}
      {isChatContentOpen === 'more' && <ChatInfo />}
      {isChatContentOpen === 'participant' && <ChatParticipant />}
    </ChatModalWrapper>
  );
};

const ChatModalWrapper = styled.div`
  width: 455px;
  height: 700px;
  border-radius: 32px;
  box-shadow: 2px 2px 2px 2px gray;
  background-color: #ffffff;
`;

export default ChatModal;
