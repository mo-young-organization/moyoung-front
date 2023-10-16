import { styled } from 'styled-components';
import { useState } from 'react';

import ChatContent from './ChatContent';
import ChatInfo from './ChatInfo';
import ChatParticipant from './ChatParticipant';
import Modal from '../Modal/Modal';
import type { ArticleProps } from '../RecruitmentList/Article';

export type OpenChat = 'chat' | 'more' | 'participant';
type Props = {
  closeChatModal: () => void;
  recruitData: ArticleProps;
};

const ChatModal = (props: Props) => {
  const [isChatContentOpen, setIsChatContentOpen] = useState<OpenChat>('chat');
  const sessionMyName = window.sessionStorage.getItem('displayName');

  const switchModalView = (whitchView: OpenChat) => {
    setIsChatContentOpen(whitchView);
  };
  return (
    <Modal>
      <ChatModalWrapper>
        {isChatContentOpen === 'chat' && (
          <ChatContent
            switchModalView={switchModalView}
            closeChatModal={props.closeChatModal}
            recruitData={props.recruitData}
          />
        )}
        {isChatContentOpen === 'more' && (
          <ChatInfo
            switchModalView={switchModalView}
            closeChatModal={props.closeChatModal}
            recruitData={props.recruitData}
            sessionMyName={sessionMyName}
          />
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
  left: calc(100% - 480px);
  top: calc(100% - 730px);
  z-index: 20;
`;

export default ChatModal;
