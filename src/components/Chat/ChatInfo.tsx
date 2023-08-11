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
      <Movie>
        <div className="movieInfoWrpper">
          <img
            className="movieImg"
            src="https://upload.wikimedia.org/wikipedia/ko/c/cd/%EC%9C%84%EB%8C%80%ED%95%9C_%EC%87%BC%EB%A7%A8.jpg"
            alt={`${'영화이름'}영화 포스터 사진`}
          />
          <div className="aboutMovie">
            <span className="movieTitle">미션 임파서블: 데드 레코닝 PART ONE</span>
            <div className="detailInfo">
              <img
                className="ageLimit"
                src="https://img.megabox.co.kr/static/pc/images/common/txt/15_46x46.png"
                alt="나이제한 이미지"
              />
              <span className="movieType">2D(자막)</span>
            </div>
          </div>
        </div>
        <div className="timeInfoWrapper">
          <span className="movieTime">{`${'2023년 7월 12일 수요일'} / ${'16:50'} / ${'5관'}`}</span>
        </div>
        <div className="placeInfoWrapper">
          <div className="place">
            <img
              className="theater"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiifYQr_W9vQiH0g1s0v9dS23mFem5d8NlN8jVl3IbwIn0y-GRFe3cZnN3Qdoxp9xv3w&usqp=CAU"
              alt={'극장이름 로고'}
            />
            <span className="city">고양스타필드</span>
          </div>
          <div className="adress">경기 고양시 덕양구 고양대로 1955 스타필드 고양</div>
        </div>
      </Movie>
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: calc(700px - 67px - 280px);
  padding: 32px;
  .movieInfoWrpper {
    display: flex;
    .movieImg {
      width: 100px;
      height: 140px;
    }
    .aboutMovie {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 16px;
      .movieTitle {
        font-size: 24px;
        font-weight: bold;
        line-height: 150%;
      }
      .detailInfo {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        .ageLimit {
          width: 20px;
          height: 20px;
        }
        .movieType {
          color: #858585;
          margin-left: 8px;
        }
      }
    }
  }
  .timeInfoWrapper {
    width: 100%;
    .movieTime {
      display: block;
      background-color: #e9e9e9;
      padding: 8px;
      width: 100%;
      text-align: center;
      font-weight: bold;
    }
  }
  .placeInfoWrapper {
    color: #858585;
    .place {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .theater {
        width: 45px;
        /* height: 22px; */
      }
      .city {
        font-size: 16px;
        margin-left: 8px;
      }
    }
  }
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
