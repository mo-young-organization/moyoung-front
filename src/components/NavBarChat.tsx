import { BsChatLeftDots } from 'react-icons/bs';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getChatList, getRecruitData } from '../api/api';
import ChatModal from './Chat/ChatModal';

type TPartChatList = {
  cinemaBrand: string;
  cinemaName: string;
  currentNum: number;
  lastMessage: null | string;
  lastMessageAt: string;
  maxNum: number;
  movieThumbnailUrl: string;
  recruitingArticleId: number;
  title: string;
  unreadCount: number;
};

const NavBarChat = () => {
  const [partChatList, setPartChatList] = useState<TPartChatList[] | null>(null);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatroomId, setChatroomId] = useState<number | null>(null);

  const getChatData = async () => {
    const data = await getChatList();

    setPartChatList(data.data);
  };

  const onClickHandler = () => {
    setIsListOpen(!isListOpen);
  };

  const onChatroomClickHandler = async (id: number) => {
    const data = await getRecruitData(id);
  };

  const closeChatModal = () => {
    setIsChatOpen(false);
  };

  const openChatModal = () => {
    setIsChatOpen(true);
    setIsListOpen(false);
  };

  useEffect(() => {
    getChatData();
  }, [isListOpen]);

  return (
    <>
      <div role="button" className="login text" onClick={onClickHandler}>
        <BsChatLeftDots />
        참여중인 채팅
        {isListOpen ? <RiArrowUpSLine className="arrow" /> : <RiArrowDownSLine className="arrow" />}
      </div>
      {isChatOpen && chatroomId && <ChatModal closeChatModal={closeChatModal} recruitId={chatroomId} />}
      {isListOpen && (
        <ChatroomListWrapper>
          {partChatList &&
            partChatList.map(el => (
              <>
                <Chatroom
                  key={el.recruitingArticleId}
                  onClick={() => {
                    onChatroomClickHandler(el.recruitingArticleId);
                    setChatroomId(el.recruitingArticleId);
                    openChatModal();
                  }}
                >
                  <img className="thumbnail" src={el.movieThumbnailUrl} alt="영화 썸네일 이미지" />
                  <ChatRoomInfoWrapper>
                    <div className="title">{el.title}</div>
                    <div className="cinemaInfo">
                      <span>{el.cinemaBrand}</span>
                      <span className="cinemaName">{el.cinemaName}</span>
                    </div>
                  </ChatRoomInfoWrapper>
                  <MemberCountWrapper>
                    <span className="memberCount">
                      {el.currentNum} / {el.maxNum}
                    </span>
                  </MemberCountWrapper>
                </Chatroom>
              </>
            ))}
        </ChatroomListWrapper>
      )}
    </>
  );
};

const ChatroomListWrapper = styled.ul`
  position: absolute;
  z-index: 999;
  /* left: calc(100% - 500px); */
  right: 15%;
  top: 100px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #cccccc;
  min-width: 350px;
  min-height: 80px;
  background-color: #d4e3ff;
  list-style: none;
`;

const Chatroom = styled.li`
  padding: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d4e3ff;
  border-radius: 10px;
  &&:hover {
    background-color: #9dbffe;
    cursor: pointer;
  }
  .thumbnail {
    max-height: 100%;
    border-radius: 5px;
  }
`;
const ChatRoomInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  .title {
    font-weight: bold;
    font-size: 16px;
  }
  .cinemaInfo {
    .cinemaName {
      font-size: 14px;
      color: #686868;
    }
  }
`;

const MemberCountWrapper = styled.div`
  display: flex;
  align-items: start;
  height: 100%;
  .memberCount {
    color: #5b5b5b;
    font-size: 14px;
  }
`;

export default NavBarChat;
