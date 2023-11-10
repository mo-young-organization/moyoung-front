import all from '../../../assets/img/all.svg';
import twelve from '../../../assets/img/12years.svg';
import Fifteen from '../../../assets/img/15years.svg';
import Eighteen from '../../../assets/img/18years.svg';
import MEGA from '../../../assets/img/MEGA_logo.png';
import LOTTE from '../../../assets/img/LOTTE_logo.png';
import CGV from '../../../assets/img/CGV_logo.png';
import styled from 'styled-components';
import { ThumbnailProps } from './Modal/type';

const Ticket = ({ moviePickData, cinemaPickData, runningTimeData }) => {
  // console.log(cinemaPickData[0].brand);
  const days = () => {
    if (runningTimeData) {
      const month = runningTimeData.startTime.slice(5, 7);
      const weak = runningTimeData.startTime.slice(8, 10);
      const year = runningTimeData.startTime.slice(0, 4);

      return `${month}/${weak}/${year}`;
    }
  };

  const time = () => {
    if (runningTimeData) {
      const time = runningTimeData.startTime.slice(11, 16);
      if (+time.slice(0, 2) >= 12) {
        return `${time} PM`;
      } else {
        return `${time} AM`;
      }
    }
  };

  // 영화 관람가
  const audience = text => {
    if (text.includes('12')) {
      return twelve;
    } else if (text.includes('15')) {
      return Fifteen;
    } else if (text.includes('청소년')) {
      return Eighteen;
    } else if (text.includes('전체')) {
      return all;
    }
  };

  return (
    <>
      <TicketDiv>
        <LeftTicket>
          <LeftTicketContent>
            <LeftTicketTopDiv>
              <PosterDiv $img={moviePickData.movieInfo.thumbnailUrl} role="사진" />
              <LeftTicketTopDivContnet>
                <div className="movie_title">{moviePickData.movieInfo.name}</div>
                <div className="top-div-contnet">
                  <div className="box1">
                    <img alt="관람가이미지" src={audience(moviePickData.movieInfo.movieRating)} />
                  </div>
                  <span className="kind">{moviePickData.movieInfo.movieRating}</span>
                </div>
              </LeftTicketTopDivContnet>
            </LeftTicketTopDiv>
            <LeftTicketBottomDiv>
              <LeftTicketBottomTop>
                <div className="bottom-top-top">
                  <div>
                    {cinemaPickData.length && cinemaPickData[0].brand === 'Mega' ? (
                      <img src={MEGA} />
                    ) : cinemaPickData.length && cinemaPickData[0].brand === 'Lotte' ? (
                      <img src={LOTTE} />
                    ) : cinemaPickData.length && cinemaPickData[0].brand === 'CGV' ? (
                      <img src={CGV} />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="fontC 위치">{cinemaPickData.length ? cinemaPickData[0].name : ''}</div>
                </div>
                <span className="fontC">/</span>
                <span className="fontC 장소">{cinemaPickData.length ? cinemaPickData[1].screenInfo : ''}</span>
              </LeftTicketBottomTop>
              <LeftTicketBottomBottom>
                <span>{days()}</span>
                <span>{time()}</span>
              </LeftTicketBottomBottom>
            </LeftTicketBottomDiv>
          </LeftTicketContent>
        </LeftTicket>
        <RightTicket />
        <TicketLine>
          <TicketLineBoxTop />
          <TicketLineBoxBottom />
        </TicketLine>
      </TicketDiv>
    </>
  );
};

export default Ticket;

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
      color: #dedede;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    width: 150px;
    height: 78px;

    .movie_title {
      font-size: 18px;
    }

    .top-div-contnet {
      display: flex;

      .box1 {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
      .kind {
        font-size: 12px;
      }
    }
  }
`;

const LeftTicketTopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 218px;
    height: 78px;
  }
`;

const LeftTicketBottomTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fontC {
    color: var(--point-color);
  }

  .장소 {
    font-size: 20px;
    font-weight: 500;
  }

  .bottom-top-top {
    display: flex;

    .위치 {
      margin-left: 5px;
      font-size: 20px;
      font-weight: 700;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    .fontC {
      color: var(--point-color);
    }

    .장소 {
      font-size: 14px;
    }

    .bottom-top-top {
      .위치 {
        font-size: 14px;
      }

      img {
        width: 34px;
        height: 16px;
      }
    }
  }
`;

const LeftTicketBottomBottom = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 500;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`;

const LeftTicketBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 246px;
  height: 53px;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    width: 175px;
    height: 45px;
  }
`;

const LeftTicketContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 350px;
  height: 240px;

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 220px;
    height: 150px;
  }
`;

const LeftTicket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 395px;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
  background-color: var(--main-color);

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 255px;
    height: 190px;
  }
`;

const TicketLineBoxBottom = styled.div`
  position: relative;
  right: 22px;
  width: 40px;
  height: 24px;
  border-radius: 12px 12px 0px 0px;

  background-color: white;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    right: 19px;
    width: 32px;
    height: 20px;
  }
`;

const TicketLineBoxTop = styled.div`
  position: relative;
  right: 22px;
  width: 40px;
  height: 24px;
  border-radius: 0px 0px 12px 12px;

  background-color: white;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    right: 19px;
    width: 32px;
    height: 20px;
  }
`;

const TicketLine = styled.div`
  position: relative;
  left: -106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 5px dashed white;
  height: 295px;

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    left: -66px;
    height: 190px;
  }
`;

const RightTicket = styled.div`
  width: 110px;
  height: 100%;
  border-radius: 0px 8px 8px 0px;
  background-color: var(--sub-color1);

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 65px;
    height: 190px;
  }
`;

const TicketDiv = styled.div`
  display: flex;

  width: 520px;
  height: 295px;

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 360px;
    height: 190px;
  }
`;

const PosterDiv = styled.div<ThumbnailProps>`
  background-image: url(${props => props.$img});
  background-size: 100%;

  background-color: red;
  width: 97px;
  height: 135px;
  border-radius: 4px;
  margin-right: 12px;

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 56px;
    height: 78px;
  }
`;
