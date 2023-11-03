import { BsChatLeftDots } from 'react-icons/bs';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

import { getChatList } from '../api/api';

type PartChatList = {
  lastMessage: null | string;
  lastMessageAt: string;
  recruitingArticleId: number;
  unreadCount: number;
};

const NavBarChat = () => {
  const [partChatList, setPartChatList] = useState<PartChatList[] | null>(null);
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
  }, []);

  return (
    <div role="button" className="login text" onClick={onClickHandler}>
      <BsChatLeftDots />
      참여중인 채팅
      {isListOpen ? <RiArrowUpSLine className="arrow" /> : <RiArrowDownSLine className="arrow" />}
    </div>
  );
};

export default NavBarChat;
