import { styled } from 'styled-components';
import { PropsCreatePost } from '../../SignupCheck/FormType';
import { LiaSearchSolid } from 'react-icons/lia';
import Calendar from '../../CinemaInfo/MovieFilter/Calendar';

import { CinemaDummy } from '../../CinemaInfo/Cinema/data';
import Cinema from '../../CinemaInfo/MovieFilter/Cinema';
import FilterCinema from '../Filter/FilterCinema';
import FilterTime from '../Filter/FilterTime';
import FilterDistance from '../Filter/FilterDistance';

const PostCinema = ({ register }: PropsCreatePost) => {
  const date = CinemaDummy;

  const movieSearchHandler = () => {
    console.log('영화 검색 버튼 클릭');
  };

  const filterinFilterHandler = () => {
    console.log('필터안에 필터');
  };

  const cinemaArr = [
    { id: 'cgv', cinema: 'CGV' },
    { id: 'mega', cinema: '메가박스' },
    { id: 'lotte', cinema: '롯데시네마' },
  ];

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
      {/* 이 밑에는 따로 컴포넌트로 빼야함 */}
      {/* <FilterDiv>
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
      </FilterDiv> */}
      <InFilterForm>
        <InFilterDiv>
          <div className="filter_font_div">필터</div>
          <InMidDiv>
            <FilterCinema />
            <FilterTime />
            <FilterDistance />
          </InMidDiv>
          <div className="filter_button_div">
            <button onClick={e => e.preventDefault()}>적용</button>
          </div>
        </InFilterDiv>
      </InFilterForm>
    </Container>
  );
};

export default PostCinema;

// ----Filter
const InFilterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: whitesmoke;

  width: 580px;
  height: 360px;
  border-radius: 12px;
`;

const InFilterDiv = styled.div`
  height: 320px;

  .filter_font_div {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  .filter_button_div {
    display: flex;
    justify-content: end;

    > button {
      border: 1px solid #c2c2c2;
      border-radius: 4px;
      background-color: transparent;
      width: 65px;
      height: 33px;

      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const InMidDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 200px;
  margin: 28px 0px;
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

  border: 0;
  border-radius: 8px;
  background-color: transparent;

  &:hover {
    background-color: red;
  }

  > svg {
    width: 40px;
    height: 40px;
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
