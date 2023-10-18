import { useEffect } from 'react';
import styled from 'styled-components';

const Ticket = ({ moviePickData, cinemaPickData, runningTimeData }) => {
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

  return (
    <>
      <TicketDiv>
        <LeftTicket>
          <LeftTicketContent>
            <LeftTicketTopDiv>
              <PosterDiv className="movie_poster" $img={moviePickData.movieInfo.thumbnailUrl} role="사진" />
              <LeftTicketTopDivContnet>
                <div className="movie_title">{moviePickData.movieInfo.name}</div>
                <div className="top-div-contnet">
                  <div className="box1">x</div>
                  <span className="kind">{moviePickData.movieInfo.movieRating}</span>
                </div>
              </LeftTicketTopDivContnet>
            </LeftTicketTopDiv>
            <LeftTicketBottomDiv>
              <LeftTicketBottomTop>
                <div className="bottom-top-top">
                  <div className="box2">박스</div>
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

  width: 395px;
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
  left: 680px;
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

const PosterDiv = styled.div`
  background-image: url(${props => props.$img});
  background-size: 100%;
`;
