import { styled } from 'styled-components';
import { PiChatDotsLight } from 'react-icons/pi';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { IoPersonSharp } from 'react-icons/io5';
import { useRef, useCallback, useState, KeyboardEvent } from 'react';

import type { OpenChat } from './ChatModal';
import type { TChat } from '../../data/DummyChat';
import Chat from './Chat';
import dummyChatData from '../../data/DummyChat';

export type Props = {
  switchModalView: (witchModalView: OpenChat) => void;
  closeChatModal: () => void;
};

// textarea shift enter로 줄바꿈
// 빈 문자열이면 실행되지 않게

const myId = 4;

const ChatContent = (props: Props) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [chatData, setChatData] = useState<TChat[]>(dummyChatData);

  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = '16px';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, []);

  const sendMessageHandler = () => {
    if (textRef!.current!.value.trim() === '') {
      textRef!.current!.value = '';
      return;
    }

    let contents: string = textRef!.current!.value;
    contents = contents.replaceAll('<br>', '\r\n');

    setChatData([
      ...chatData,
      {
        writerId: myId,
        name: '김현우',
        gender: 'male',
        age: '70',
        content: textRef!.current!.value,
        time: '오후 13:24',
        readCount: '2',
      },
    ]);

    textRef!.current!.value = '';
  };
  const pressEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.shiftKey && e.key === 'Enter') {
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      sendMessageHandler();
    }
  };

  return (
    <ChatContentWrapper>
      <Header>
        <div className="textWrapper ">
          <PiChatDotsLight />
          <span className="margin chat">CHAT</span>
        </div>
        <div className="buttonWrapper ">
          <BsThreeDots className="button" onClick={() => props.switchModalView('more')} />
          <AiOutlineClose className="margin button" onClick={props.closeChatModal} />
        </div>
      </Header>
      <Title>
        <div className="titleText">영화보고 고기 먹으러 가용 ^__^</div>
        <div className="peopleCount" onClick={() => props.switchModalView('participant')}>
          <IoPersonSharp />
          <span>3/4</span>
        </div>
      </Title>
      <div className="contentWrapper">
        <Content>
          {chatData.map((el, idx) => {
            return myId === el.writerId ? (
              <div key={idx + 'chat'} className="myChatWrapper">
                <div className="message-time">
                  <div className="readCount">{el.readCount}</div>
                  <div className="time">{el.time}</div>
                </div>
                <div className="message-content">
                  <pre className="content">{el.content}</pre>
                </div>
              </div>
            ) : (
              <Chat key={idx + 'chat'} chatData={el} />
            );
          })}
        </Content>
      </div>
      <Send>
        {/* <input type="text" className="chatInput" placeholder="메세지를 입력해주세요" /> */}
        <textarea
          className="chatInput"
          ref={textRef}
          onInput={handleResizeHeight}
          placeholder="메세지를 입력해주세요"
          onKeyPress={pressEnterKey}
        />
        <button className="sendButton" onClick={sendMessageHandler}>
          전송
        </button>
      </Send>
    </ChatContentWrapper>
  );
};

const ChatContentWrapper = styled.div`
  pre {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
  }
  .contentWrapper {
    height: 485px;
    display: flex;
    flex-direction: column-reverse;
    background-color: #ebebeb;
    overflow: auto;
  }
`;

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
  height: 60px;

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

const Content = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 21px;
  padding-top: 16px;

  .myChatWrapper {
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 16px;
    .content {
      background-color: #676767;
      color: #ffffff;
      padding: 12px 16px;
      border-radius: 25px;
      word-break: keep-all;
      max-width: 330px;
    }
    .message-time {
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: end;
      margin-right: 8px;
      .readCount {
        color: #7d7d7d;
        font-size: 12px;
      }
    }
  }
`;

const Send = styled.div`
  display: flex;
  height: auto;
  padding: 16px;

  .chatInput {
    width: 100%;
    margin-right: 16px;
    outline: none;
    border: none;
    padding: 4px;
    background-color: var(--green);
    min-height: 30px;
    max-height: 60px;
    resize: none;
    overflow: auto;
  }
  .sendButton {
    width: 65px;
    height: 36px;
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
