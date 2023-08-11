import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { GiMale } from 'react-icons/gi';
import { GiFemale } from 'react-icons/gi';
import { styled } from 'styled-components';

import type { Props } from './ChatContent';

const ChatInfo = (props: Props) => {
  return (
    <ChatContentWrapper>
      <Header>
        <div className="textWrapper ">
          <IoIosArrowBack className="backwardIcon bold button" onClick={() => props.switchModalView('chat')} />
          <span className="margin bold">상세정보</span>
        </div>
        <div className="buttonWrapper ">
          <AiOutlineClose className="margin button" onClick={props.closeChatModal} />
        </div>
      </Header>
      <Movie></Movie>
      <Detail>
        <div className="detail-text">등록 글 상세정보</div>
        <RecruitInfoWrapper>
          <div className="detail-write">
            <span className="titleText">작성</span>
            <ul className="write-info--wrapper">
              <li>닉네임</li>
              <li>
                <GiMale className="participant--male" />
              </li>
              <li className="age">20대</li>
            </ul>
          </div>
          <div className="detail-recruit">
            <span className="titleText">모집</span>
            <ul className="recruit-info--wrapper">
              <li>4명</li>
              <li>여자만</li>
              <li>20대</li>
            </ul>
          </div>
          <div className="button-wrapper">
            <button className="quitButton">모임에서 나가기</button>
          </div>
        </RecruitInfoWrapper>
      </Detail>
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
  .bold {
    font-weight: bold;
  }
`;
const Movie = styled.div`
  height: calc(700px - 67px - 280px);
  padding: 32px;
`;
const Detail = styled.div`
  background-color: #f1f1f1;
  height: 280px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 32px;

  .detail-text {
    color: #9f9f9f;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 32px;
  }
`;
const RecruitInfoWrapper = styled.div`
  padding-left: 8px;
  .titleText {
    color: #686868;
    font-weight: bold;
  }
  .detail-write {
    display: flex;
    margin-bottom: 16px;
    > .write-info--wrapper {
      display: flex;
      > li {
        list-style: none;
        margin-right: 4px;
        .participant--male {
          color: #6360ff;
        }
        .participant--female {
          color: #ff6060;
        }
      }
      .age {
        color: #9d9d9d;
      }
    }
  }
  .detail-recruit {
    display: flex;
    margin-bottom: 16px;
    > .recruit-info--wrapper {
      margin-left: 16px;
      > li {
        margin-bottom: 8px;
      }
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: end;
    .quitButton {
      background-color: #545454;
      box-shadow: none;
      border: none;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 12px;
      &:hover {
        cursor: pointer;
        background-color: #ff6060;
        transition: 0.4s;
      }
    }
  }
`;

export default ChatInfo;
