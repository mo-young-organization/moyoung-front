import { styled } from 'styled-components';
import { PiChatDotsLight } from 'react-icons/pi';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { IoPersonSharp } from 'react-icons/io5';

import type { OpenChat } from './ChatModal';

export type Props = {
  switchModalView: (witchModalView: OpenChat) => void;
};
const ChatContent = (props: Props) => {
  return (
    <ChatContentWrapper>
      <Header>
        <div className="textWrapper ">
          <PiChatDotsLight />
          <span className="margin chat">CHAT</span>
        </div>
        <div className="buttonWrapper ">
          <BsThreeDots className="button" onClick={() => props.switchModalView('more')} />
          <AiOutlineClose className="margin button" />
        </div>
      </Header>
      <Title>
        <div className="titleText">영화보고 고기 먹으러 가용 ^__^</div>
        <div className="peopleCount" onClick={() => props.switchModalView('participant')}>
          <IoPersonSharp />
          <span>3/4</span>
        </div>
      </Title>
      <Content></Content>
      <Send>
        <input type="text" className="chatInput" placeholder="메세지를 입력해주세요" />
        <button className="sendButton">전송</button>
      </Send>
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

  .button:hover {
    cursor: pointer;
  }
  .margin {
    margin-left: 8px;
  }
  .chat {
    font-weight: bold;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 82px;

  .titleText {
    font-size: 24px;
    font-weight: bold;
    height: 50%;
  }
  .peopleCount {
    font-size: 14px;
    color: #6c6c6c;
    height: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Content = styled.div`
  background-color: #ebebeb;
  height: 485px;
`;

const Send = styled.div`
  display: flex;
  height: 65px;
  padding: 16px;

  .chatInput {
    width: 100%;
    margin-right: 16px;
    outline: none;
    border: none;
    padding: 4px;
  }
  .sendButton {
    width: 65px;
    background-color: #bcbcbc;
    border: none;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: #676767;
    }
  }
`;

export default ChatContent;
