import { BsChatLeftDots } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

import { getChatList } from '../api/api';

const NavBarChat = () => {
  const [partChatList, setPartChatList] = useState<string[] | null>(null);
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
      <RiArrowDownSLine className="arrow" />
    </div>
  );
};

export default NavBarChat;
