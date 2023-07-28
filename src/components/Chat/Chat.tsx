import { GiMale } from 'react-icons/gi';
import { GiFemale } from 'react-icons/gi';
import { styled } from 'styled-components';

const Chat = () => {
  return (
    <MessageWrapper className="messageWrapper">
      <div className="message-content">
        <div className="writerInfo">
          <span className="nickName">닉네임</span>
          <GiMale className="gender" />
          <span className="age">20대</span>
        </div>
        <div className="content">안녕하세요!</div>
      </div>
      <div className="message-time">
        <div className="readCount">2</div>
        <div className="time">오후 13:24</div>
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
  }
  .writerInfo {
    display: flex;
    margin: 0 0 4px 8px;
    .gender .male {
      color: blue;
    }
    .gender .female {
      color: red;
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
