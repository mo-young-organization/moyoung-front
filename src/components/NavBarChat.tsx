import { BsChatLeftDots } from 'react-icons/bs';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getChatList } from '../api/api';

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
  const getChatData = async () => {
    const data = await getChatList();
    console.log(data.data);
    setPartChatList(data.data);
  };

  const onClickHandler = () => {
    setIsListOpen(!isListOpen);
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
      {isListOpen && (
        <ChatroomListWrapper>{partChatList && partChatList.map(el => <Chatroom></Chatroom>)}</ChatroomListWrapper>
      )}
    </>
  );
};

const ChatroomListWrapper = styled.ul`
  position: absolute;
  right: 150px;
  top: 100px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #cccccc;
  min-width: 400px;
  min-height: 80px;
  background-color: #d4e3ff;
  list-style: none;
`;

const Chatroom = styled.li`
  padding: 16px;
`;

export default NavBarChat;
