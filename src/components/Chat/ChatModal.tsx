import { styled } from 'styled-components';
import { useState } from 'react';

import ChatContent from './ChatContent';
import ChatInfo from './ChatInfo';
import ChatParticipant from './ChatParticipant';
import Modal from '../Modal/Modal';

export type OpenChat = 'chat' | 'more' | 'participant';

const ChatModal = (props: { closeChatModal: () => void }) => {
  const [isChatContentOpen, setIsChatContentOpen] = useState<OpenChat>('chat');

  const switchModalView = (whitchView: OpenChat) => {
    setIsChatContentOpen(whitchView);
  };
  return (
    <Modal>
      <ChatModalWrapper>
        {isChatContentOpen === 'chat' && (
          <ChatContent switchModalView={switchModalView} closeChatModal={props.closeChatModal} />
        )}
        {isChatContentOpen === 'more' && (
          <ChatInfo switchModalView={switchModalView} closeChatModal={props.closeChatModal} />
        )}
        {isChatContentOpen === 'participant' && (
          <ChatParticipant switchModalView={switchModalView} closeChatModal={props.closeChatModal} />
        )}
      </ChatModalWrapper>
    </Modal>
  );
};

const ChatModalWrapper = styled.div`
  width: 455px;
  height: 700px;
  border-radius: 32px;
  box-shadow: 2px 2px 10px 2px gray;
  background-color: #ffffff;
  font-size: 14px;
  position: fixed;
  left: 65%;
  top: 47%;
  z-index: 20;
`;

export default ChatModal;
