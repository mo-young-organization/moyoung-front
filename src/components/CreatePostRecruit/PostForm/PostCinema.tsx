import { styled } from 'styled-components';
import { PropsCreatePost } from '../../SignupCheck/FormType';
import { LiaSearchSolid } from 'react-icons/lia';
import Cinema from '../../CinemaInfo/MovieFilter/Cinema';

import CinemaPotal from './Modal/CinemaPotal';
import CinemaModal from './Modal/CinemaModal';
import { useState } from 'react';

const PostCinema = ({ register }: PropsCreatePost) => {
  const [modalOn, setModalOn] = useState(false);

  const movieSearchHandler = () => {
    console.log('영화 검색 버튼 클릭');
    setModalOn(!modalOn);
  };

  return (
    <Container>
      <div className="cinema_title">*영화 및 영화관 선택</div>
      <Content>
        <InputDiv>
          <input type="text" placeholder="영화 제목을 검색해주세요" {...register('cinema', { required: true })} />
        </InputDiv>
        <SearchButton type="button" onClick={movieSearchHandler}>
          <LiaSearchSolid />
        </SearchButton>
      </Content>
      <WhichMovieDiv>
        <span>어떤 영화를 볼까요?</span>
      </WhichMovieDiv>
      <CinemaPotal>{modalOn && <CinemaModal onClose={movieSearchHandler} />}</CinemaPotal>
      {/* 이 밑에는 따로 컴포넌트로 빼야함 */}
      {/* <TicketDiv>
        <LeftTicket>
          <LeftTicketContent>
            <LeftTicketTopDiv>
              <div className="movie_poster">사진</div>
              <LeftTicketTopDivContnet>
                <div className="movie_title">스파이더맨:어크로스더 유니버스</div>
                <div className="top-div-contnet">
                  <div className="box1">x</div>
                  <span className="kind">2D(자막)</span>
                </div>
              </LeftTicketTopDivContnet>
            </LeftTicketTopDiv>
            <LeftTicketBottomDiv>
              <LeftTicketBottomTop>
                <div className="bottom-top-top">
                  <div className="box2">박스</div>
                  <div className="fontC 위치">연남</div>
                </div>
                <span className="fontC">/</span>
                <span className="fontC 장소">4관</span>
              </LeftTicketBottomTop>
              <LeftTicketBottomBottom>
                <span>07 / 01 / 2023</span>
                <span>11:50 AM</span>
              </LeftTicketBottomBottom>
            </LeftTicketBottomDiv>
          </LeftTicketContent>
        </LeftTicket>
        <RightTicket />
        <TicketLine>
          <TicketLineBoxTop />
          <TicketLineBoxBottom />
        </TicketLine>
      </TicketDiv> */}
    </Container>
  );
};

export default PostCinema;

const LeftTicketTopDivContnet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 245px;
  height: 135px;

  .movie_title {
    font-size: 28px;
    font-weight: 700;
  }

  .top-div-contnet {
    display: flex;

    .box1 {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      background-color: #dadada;
    }
    .kind {
      font-size: 16px;
      font-weight: 300;
      color: #858585;
    }
  }
`;

const LeftTicketTopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  .movie_poster {
    background-color: red;
    width: 97px;
    height: 135px;
    border-radius: 4px;
    margin-right: 12px;
  }
`;
const LeftTicketBottomTop = styled.div`
  display: flex;
  justify-content: space-between;
  .fontC {
    color: #858585;
  }

  .장소 {
    font-size: 20px;
    font-weight: 500;
  }

  .bottom-top-top {
    display: flex;

    .box2 {
      width: 50px;
      height: 23px;
      margin-right: 8px;
      background-color: #bababa;
    }

    .위치 {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

const LeftTicketBottomBottom = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 500;
`;

const LeftTicketBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 246px;
  height: 53px;
`;

const LeftTicketContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 350px;
  height: 240px;
`;

const LeftTicket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 410px;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
  background-color: #f2f2f2;
`;

const TicketLineBoxBottom = styled.div`
  position: relative;
  right: 23px;
  width: 40px;
  height: 24px;
  border-radius: 12px 12px 0px 0px;

  background-color: white;
`;

const TicketLineBoxTop = styled.div`
  position: relative;
  right: 23px;
  width: 40px;
  height: 24px;
  border-radius: 0px 0px 12px 12px;

  background-color: white;
`;

const TicketLine = styled.div`
  position: absolute;
  left: 445px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 5px dashed white;
  height: 295px;
`;

const RightTicket = styled.div`
  width: 110px;
  height: 100%;
  border-radius: 0px 8px 8px 0px;
  background-color: #e3e3e3;
`;

const TicketDiv = styled.div`
  display: flex;

  width: 520px;
  height: 295px;
`;

const Container = styled.div`
  .cinema_title {
    font-size: 28px;
    font-weight: 700;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const InputDiv = styled.div`
  width: 505px;
  height: 50px;
  margin: 12px 0px;

  > input {
    width: 505px;
    height: 50px;

    border: none;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
    padding: 0px 100px 0px 28px;

    box-shadow: 0px 1px 2px 0px #00000040;
  }
`;

const WhichMovieDiv = styled.div`
  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 505px;
  height: 295px;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 700;
  color: #bbbbbb;
`;

const SearchButton = styled.button`
  position: relative;
  right: 85px;
  width: 80px;
  height: 100%;
  cursor: pointer;
  z-index: 1;

  border: 0;
  border-radius: 8px;
  background-color: transparent;

  &:hover {
    background-color: red;
  }

  > svg {
    z-index: 1;
    width: 40px;
    height: 40px;
  }
`;
