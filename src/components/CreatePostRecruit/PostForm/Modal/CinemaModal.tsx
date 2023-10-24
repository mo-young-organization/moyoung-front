import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Calendar from '../../../CinemaInfo/MovieFilter/Calendar';
import { LiaSearchSolid } from 'react-icons/lia';
import { CinemaDummy } from '../../../CinemaInfo/Cinema/data';
import ModalPotal from '../ModalFilter/ModalPotal';
import ModalFilter from '../ModalFilter/ModalFilter';
import { cinemaGet } from '../../../../api/api';
import { movieSearchGet } from '../../../../api/api';
import { CinemaDataProps, ThumbnailProps } from './type';

import all from '../../../../assets/img/all.svg';
import twelve from '../../../../assets/img/12years.svg';
import Fifteen from '../../../../assets/img/15years.svg';
import Eighteen from '../../../../assets/img/18years.svg';

const CinemaModal = ({ onClose, data, movieName, setMoviePickData, setCinemaPickData, setRunningTimeData }) => {
  // 영화 데이터
  const [movieData, setMovieData] = useState(data.data);
  // 영화 & 영화관 데이터
  const [cinemaData, setCinemaData] = useState<CinemaDataProps>();
  const [modalFilterOn, setmodalFilterOn] = useState(false);
  const [movieValue, setMovieValue] = useState('');

  const movieSearchHandler = e => {
    setMovieValue(e.target.value);
  };

  const movieSearchClickHandler = async e => {
    console.log('영화 검색 버튼 클릭');
    setCinemaData(undefined);

    const data = await movieSearchGet(movieValue,3000);
    setMovieData(data.data);
  };

  const filterinFilterHandler = () => {
    console.log('필터안에 필터');
    setmodalFilterOn(!modalFilterOn);
  };

  // 오늘 날짜 년도-월-일 순서
  const dateNew = new Date();
  const month = dateNew.getMonth() + 1;
  const year = dateNew.getFullYear();
  const today = dateNew.getDate();
  const todayDate = `${year}-${month}-${today}`;

  const lat = '37.498';
  const lon = '127.026';
  const [dt, setDt] = useState(1500);
  const [date, setDate] = useState(todayDate);
  const [early, setEarly] = useState(false);
  const [lotte, setLotte] = useState(true);
  const [mega, setMega] = useState(true);

  const [id, setId] = useState();

  const clickHandler = async movieId => {
    console.log('여기서 문제');
    setId(movieId);
    const data = await cinemaGet(lat, lon, dt, movieId, date, early, lotte, mega);
    setCinemaData(data.data);
    setMoviePickData(data.data);
  };

  const runningTimeHandler = (runTime, data, el) => {
    console.log('버튼 클릭');
    setRunningTimeData(runTime);
    const cinemaInfoArr = [el, data];
    setCinemaPickData(cinemaInfoArr);
  };

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

  useEffect(() => {
    clickHandler(id);
  }, [lat, lon, dt, date, early, lotte, mega]);

  return (
    <Background>
      <Content>
        <div className="cancell-button" onClick={onClose}>
          X
        </div>
        <FilterDiv>
          <SearchDiv>
            <input
              type="text"
              title="검색창"
              placeholder="영화 제목을 검색해주세요"
              defaultValue={movieName}
              onChange={movieSearchHandler}
            />
            <FilterSearchButton type="button" onClick={movieSearchClickHandler}>
              <LiaSearchSolid />
            </FilterSearchButton>
            <button type="button" onClick={filterinFilterHandler}>
              필터
            </button>
          </SearchDiv>
          {cinemaData !== undefined ? (
            <>
              <SearchCalendarDiv>
                <CalendarDiv>
                  <Calendar setDate={setDate} />
                </CalendarDiv>
              </SearchCalendarDiv>
              <FilterCinemainfoDiv>
                <PosterDiv>
                  <MovieImg $img={cinemaData.movieInfo.thumbnailUrl} role="사진" />
                  <RightDiv>
                    <MovieTitle>
                      <div className="kr-title">{cinemaData.movieInfo.name}</div>
                      {/* <div className="en-title">Spider-Man: Across the Spider-Verse</div> */}
                    </MovieTitle>
                    <div>네모??</div>
                  </RightDiv>
                </PosterDiv>
                <CinemaContentDiv>
                  <ContainerUl>
                    {cinemaData.cinemaInfo.map((el, idx) => (
                      <ContentLi key={idx}>
                        <HeadDiv>
                          <span className="area">{el.name}</span>
                          <span className="address">{el.address}</span>
                        </HeadDiv>
                        <ContentUl>
                          {el.screenInfoList.map(data => (
                            <ContentLis key={data.screenInfo}>
                              <span className="theater">{data.screenInfo}</span>
                              <div>
                                {data.runningTimeList.map((date, idx) => (
                                  <button key={idx} className="time" onClick={() => runningTimeHandler(date, data, el)}>
                                    {date.startTime.slice(11, 16)}
                                  </button>
                                ))}
                              </div>
                            </ContentLis>
                          ))}
                        </ContentUl>
                      </ContentLi>
                    ))}
                  </ContainerUl>
                </CinemaContentDiv>
              </FilterCinemainfoDiv>
            </>
          ) : (
            <ListContentUl>
              {movieData.map(el => (
                <BoxLi key={el.name}>
                  <LiContentDiv>
                    <MovieInfoDiv>
                      <ThumbnailDiv $img={el.thumbnailUrl} role="img" />
                      <TitleDiv>
                        <div>
                          <div className="name">{el.name}</div>
                          <div className="enName">{el.enName}</div>
                        </div>
                        <div>
                          <img className="img" src={el.movieRating && audience(el.movieRating)} />
                        </div>
                      </TitleDiv>
                    </MovieInfoDiv>
                    <BoxUl>
                      {el.typeList.map(data => (
                        <BoxLis key={data.movieId} role="button" onClick={() => clickHandler(data.movieId)}>
                          <div>
                            <div className="type">{data.type}</div>
                            <div className="count">{data.count}건</div>
                          </div>
                          <div>&gt;</div>
                        </BoxLis>
                      ))}
                    </BoxUl>
                  </LiContentDiv>
                </BoxLi>
              ))}
            </ListContentUl>
          )}
        </FilterDiv>
        <ModalPotal>
          {modalFilterOn && (
            <ModalFilter
              setDate={setDate}
              setEarly={setEarly}
              setLotte={setLotte}
              setMega={setMega}
              setDt={setDt}
              onClose={filterinFilterHandler}
            />
          )}
        </ModalPotal>
      </Content>
    </Background>
  );
};

export default CinemaModal;

const Background = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  background-color: rgba(0, 0, 0, 0.2);

  .cancell-button {
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
    width: 580px;
  }
`;

const FilterDiv = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 16px 28px;

  width: 580px;
  height: 800px;
`;

const SearchCalendarDiv = styled.div`
  /* background-color: pink; */
  width: 520px;
  height: 180px;
`;

const CalendarDiv = styled.div`
  display: flex;

  width: 520px;
`;

const SearchDiv = styled.div`
  position: relative;
  width: 520px;
  height: 50px;
  margin-bottom: 12px;

  > input {
    width: 460px;
    height: 50px;

    border: none;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px;
    margin-right: 12px;
    padding: 0px 70px 0px 15px;
  }

  > button {
    width: 48px;
    height: 48px;
  }
`;

const FilterSearchButton = styled.button`
  position: absolute;
  right: 70px;
  cursor: pointer;

  border: 0;
  border-radius: 8px;
  background-color: transparent;

  > svg {
    &:hover {
      background-color: red;
    }
    width: 24px;
    height: 24px;
  }
`;

const FilterCinemainfoDiv = styled.div`
  background-color: white;
  width: 520px;
  height: 550px;
  border-radius: 8px;
  padding: 20px 28px;
`;

const PosterDiv = styled.div`
  display: flex;
  margin-bottom: 24px;
  /* background-color: red; */
`;

const MovieImg = styled.div<ThumbnailProps>`
  width: 76px;
  height: 106px;
  border-radius: 4px;
  margin-right: 12px;

  background-color: pink;
  background-image: url(${props => props.$img});
  background-size: 100%;
`;

const MovieTitle = styled.div`
  .kr-title {
    font-size: 20px;
    font-weight: 700;
  }

  .en-title {
    font-size: 12px;
    font-weight: 500;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CinemaContentDiv = styled.div`
  /* background-color: pink; */
  overflow: scroll;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  width: 455px;
  height: 360px;
`;

// -----cinemaBox

const ContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  li {
    list-style: none;
  }
`;

const ContentLi = styled.li`
  width: 100%;
  margin-bottom: 44px;
`;

const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  .area {
    font-size: 16px;
    font-weight: 700;
  }

  .address {
    color: #626262;
    font-size: 14px;
    font-weight: 300;
  }
`;

const ContentUl = styled.ul`
  background-color: #f4f4f4;

  width: 100%;
  border-radius: 16px;
  padding: 16px 40px;
`;

// ------TimeBox
const ContentLis = styled.li`
  .theater {
    color: #727272;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .time {
    width: 75px;
    height: 33px;
    border-radius: 8px;
    border: 1px solid #b6b6b6;
    padding: 8px 16px;
    margin: 12px 10px 0px 0px;
  }
`;

// 리스트 페이지
const ThumbnailDiv = styled.div<ThumbnailProps>`
  width: 60px;
  height: 80px;
  background-image: url(${props => props.$img});
  background-size: 100%;
`;

const ListContentUl = styled.ul`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 520px;
  height: 670px;
  border-radius: 8px;

  background-color: white;
  list-style: none;
`;

const BoxLi = styled.li`
  width: 460px;

  border: 1px solid #cccccc;
  border-radius: 8px;

  padding: 25px 16px;
  margin: 12px 0px;
`;

const LiContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  width: 100%;
`;

const MovieInfoDiv = styled.div`
  display: flex;
  width: 100%;

  padding-bottom: 20px;

  border-bottom: 1px solid #e1e1e1;

  .name {
    font-size: 16px;
    font-weight: 600;
  }

  .enName {
    font-size: 12px;
    font-weight: 300;
  }
`;

const TitleDiv = styled.div`
  height: 78px;
  margin-left: 12px;

  .img {
    width: 24px;
    height: 24px;
    margin-top: 12px;
  }
`;

const BoxUl = styled.ul`
  width: 30%;
  padding-top: 20px;

  list-style: none;
`;

const BoxLis = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 12px;
  width: 130px;
  border-radius: 8px;

  background-color: #538dff;
  cursor: pointer;

  .type {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }

  .count {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 400;
    color: #e1e1e1;
  }
`;
