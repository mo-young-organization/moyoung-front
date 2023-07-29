import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { styled } from 'styled-components';

import type { Props } from './ChatContent';

const ChatParticipant = (props: Props) => {
  return (
    <ChatContentWrapper>
      <Header>
        <div className="textWrapper ">
          <IoIosArrowBack className="backwardIcon bold button" onClick={() => props.switchModalView('chat')} />
          <span className="margin bold">참가자</span>
          <span className="margin count">3/4</span>
        </div>
        <div className="buttonWrapper ">
          <BsThreeDots className="button" onClick={() => props.switchModalView('more')} />
          <AiOutlineClose className="margin button" onClick={props.closeChatModal} />
        </div>
      </Header>
    </ChatContentWrapper>
  );
};

const ChatContentWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 67px;
  padding: 0 20px;
  font-size: 16px;
  .textWrapper {
    display: flex;
  }

  .button:hover {
    cursor: pointer;
  }
  .backwardIcon {
    font-size: 18px;
  }
  .margin {
    margin-left: 8px;
  }
  .count {
    color: #6c6c6c;
  }
  .bold {
    font-weight: bold;
  }
`;

export default ChatParticipant;
