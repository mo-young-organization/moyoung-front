import { styled } from 'styled-components';
import { useState } from 'react';

import ChatContent from './ChatContent';
import ChatInfo from './ChatInfo';
import ChatParticipant from './ChatParticipant';

export type OpenChat = 'chat' | 'more' | 'participant';

const ChatModal = () => {
  const [isChatContentOpen, setIsChatContentOpen] = useState<OpenChat>('chat');

  const switchModalView = (whitchView: OpenChat) => {
    setIsChatContentOpen(whitchView);
  };
  return (
    <ChatModalWrapper>
      {isChatContentOpen === 'chat' && <ChatContent switchModalView={switchModalView} />}
      {isChatContentOpen === 'more' && <ChatInfo switchModalView={switchModalView} />}
      {isChatContentOpen === 'participant' && <ChatParticipant switchModalView={switchModalView} />}
    </ChatModalWrapper>
  );
};

const ChatModalWrapper = styled.div`
  width: 455px;
  height: 700px;
  border-radius: 32px;
  box-shadow: 2px 2px 10px 2px gray;
  background-color: #ffffff;
  font-size: 14px;
`;

export default ChatModal;
