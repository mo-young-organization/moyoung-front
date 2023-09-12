import React, { useState } from 'react';
import { styled } from 'styled-components';
import Calendar from '../../../CinemaInfo/MovieFilter/Calendar';
import { LiaSearchSolid } from 'react-icons/lia';
import { CinemaDummy } from '../../../CinemaInfo/Cinema/data';
import ModalPotal from '../ModalFilter/ModalPotal';
import ModalFilter from '../ModalFilter/ModalFilter';

const CinemaModal = ({ onClose }) => {
  const date = CinemaDummy;
  const [modalFilterOn, setmodalFilterOn] = useState(false);

  const movieSearchHandler = () => {
    console.log('영화 검색 버튼 클릭');
  };

  const filterinFilterHandler = () => {
    console.log('필터안에 필터');
    setmodalFilterOn(!modalFilterOn);
  };

  return (
    <Background>
      <Content>
        <div onClick={onClose}>취소버튼</div>
        <FilterDiv>
          <SearchCalendarDiv>
            <SearchDiv>
              <input type="text" title="검색창" placeholder="영화 제목을 검색해주세요" />
              <FilterSearchButton type="button" onClick={movieSearchHandler}>
                <LiaSearchSolid />
              </FilterSearchButton>
              <button type="button" onClick={filterinFilterHandler}>
                필터
              </button>
            </SearchDiv>
            <CalendarDiv>
              <Calendar />
            </CalendarDiv>
          </SearchCalendarDiv>
          <FilterCinemainfoDiv>
            <PosterDiv>
              <MovieImg>사진</MovieImg>
              <RightDiv>
                <MovieTitle>
                  <div className="kr-title">스파이더맨: 어크로스 더 유니버스</div>
                  <div className="en-title">Spider-Man: Across the Spider-Verse</div>
                </MovieTitle>
                <div>네모??</div>
              </RightDiv>
            </PosterDiv>
            <CinemaContentDiv>
              <ContainerUl>
                {date.map((el, idx) => (
                  <ContentLi key={idx}>
                    <HeadDiv>
                      <span className="area">{el.지역}</span>
                      <span className="address">{el.주소}</span>
                    </HeadDiv>
                    <ContentUl>
                      {el.상영정보.map((data, index) => (
                        <ContentLis>
                          <span className="theater">{data.상영관}</span>
                          <div>
                            {data.상영시간.map((el, idx) => (
                              <button key={idx} className="time">
                                {el}
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
        </FilterDiv>
        <ModalPotal>{modalFilterOn && <ModalFilter onClose={filterinFilterHandler} />}</ModalPotal>
      </Content>
    </Background>
  );
};

export default CinemaModal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 70px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
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

const MovieImg = styled.div`
  width: 76px;
  height: 106px;
  border-radius: 4px;
  margin-right: 12px;

  background-color: pink;
  /* background-image: url(${props => props.jpg});
  background-size: 100%; */
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
