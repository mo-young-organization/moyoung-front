import { GiMale } from 'react-icons/gi';
import { GiFemale } from 'react-icons/gi';
import { styled } from 'styled-components';

import type { TChat } from '../../data/DummyChat';

const Chat = ({ chatData }: { chatData: TChat }) => {
  return (
    <MessageWrapper className="messageWrapper">
      <div className="message-content">
        <div className="writerInfo">
          <span className="nickName">{chatData.name}</span>
          {chatData.gender === 'male' ? (
            <GiMale className={chatData.gender} />
          ) : (
            <GiFemale className={chatData.gender} />
          )}
          <span className="age">{chatData.age}대</span>
        </div>
        <pre className="content">{chatData.content}</pre>
      </div>
      <div className="message-time">
        <div className="readCount">{chatData.readCount}</div>
        <div className="time">{chatData.time}</div>
      </div>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 16px;
  .content {
    background-color: white;
    padding: 12px 16px;
    border-radius: 25px;
    word-break: keep-all;
    white-space: pre-wrap;
    max-width: 330px;
  }
  .writerInfo {
    display: flex;
    margin: 0 0 4px 8px;
    .male {
      color: #6360ff;
    }
    .female {
      color: #ff6060;
    }
    .age {
      color: #7d7d7d;
      margin-left: 4px;
    }
  }
  .message-time {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: 8px;
    .readCount {
      color: #7d7d7d;
      font-size: 12px;
    }
  }
`;

export default Chat;
