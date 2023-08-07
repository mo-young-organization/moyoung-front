import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { IoPersonSharp } from 'react-icons/io5';
import { GiMale } from 'react-icons/gi';
import { GiFemale } from 'react-icons/gi';
import { TbCrown } from 'react-icons/tb';
import { styled } from 'styled-components';

import type { Props } from './ChatContent';
import type { TParticipants } from '../../data/DummyChat';
import { dummyParticipants } from '../../data/DummyChat';

const myId = 4;

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
      <Title>영화보고 고기 먹으러 가용 ^__^</Title>
      <Participants>
        {dummyParticipants.map((el, idx) => {
          return (
            <li className="participant-wrapper">
              <IoPersonSharp className="participant--icon personIcon noMargin" />
              <span className="participant--name">{el.name}</span>
              {el.gender === 'male' ? (
                <GiMale className="participant--male noMargin" />
              ) : (
                <GiFemale className="participant--female noMargin" />
              )}
              <span className="participant--age">{el.age + '대'}</span>
              {el.isHost && <TbCrown className="participant--icon" />}
              {el.id === myId && <span className="participant--me">나</span>}
            </li>
          );
        })}
      </Participants>
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

const Title = styled.div`
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  font-size: 24px;
  font-weight: bold;
`;

const Participants = styled.ul`
  padding: 32px 48px;
  font-size: 16px;
  li {
    list-style: none;
    display: flex;
    margin-bottom: 24px;
    > * {
      margin-left: 8px;
    }
    .participant--icon {
      font-size: 18px;
      color: #6c6c6c;
    }
    .participant--male {
      color: #6360ff;
    }
    .participant--female {
      color: #ff6060;
    }
    .participant--age {
      color: #7d7d7d;
    }
    .participant--me {
      font-size: 14px;
      background-color: #6c6c6c;
      color: #ffffff;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }

  .noMargin {
    margin: 0;
  }
`;

export default ChatParticipant;
