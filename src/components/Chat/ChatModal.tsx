import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

import ChatContent from './ChatContent';
import ChatInfo from './ChatInfo';
import ChatParticipant from './ChatParticipant';
import Modal from '../Modal/Modal';
import type { ArticleProps } from '../RecruitmentList/Article';
import { getRecruitData } from '../../api/api';

export type OpenChat = 'chat' | 'more' | 'participant';

type Props = {
  closeChatModal?: () => void;
  recruitId: number;
  // {
  //   age: string;
  //   cinemaName: string;
  //   cinemaBrand: string;
  //   cinemaRegion: string;
  //   currentNum: number;
  //   gender: string;
  //   maxNum: number;
  //   movieName: string;
  //   movieRating: string;
  //   movieThumbnailUrl: string;
  //   recruitingArticleId: number;
  //   screenInfo: string;
  //   startTime: string;
  //   title: string;
  //   writerAge: string;
  //   writerDisplayName: string;
  //   writerGender: string;
  // };
};

const ChatModal = (props: Props) => {
  const [isChatContentOpen, setIsChatContentOpen] = useState<OpenChat>('chat');
  const [chatroomData, setChatroomData] = useState(null);
  const sessionMyName = window.sessionStorage.getItem('displayName');

  const switchModalView = (whitchView: OpenChat) => {
    setIsChatContentOpen(whitchView);
  };

  const getChatroomData = async (id: number) => {
    const data = await getRecruitData(id);
    setChatroomData(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getChatroomData(props.recruitId);
  }, []);

  return (
    <Modal>
      <ChatModalWrapper>
        {isChatContentOpen === 'chat' && chatroomData && (
          <ChatContent
            switchModalView={switchModalView}
            closeChatModal={props.closeChatModal}
            recruitData={chatroomData}
          />
        )}
        {isChatContentOpen === 'more' && chatroomData && (
          <ChatInfo
            switchModalView={switchModalView}
            closeChatModal={props.closeChatModal}
            recruitData={chatroomData}
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
