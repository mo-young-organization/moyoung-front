import MoviePoster from '../components/CinemaInfo/Poster/MoviePoster';
import Search from '../components/MovieSearch/Search';
import CinemaBox from '../components/CinemaInfo/Cinema/CinemaBox';
import MovieFilter from '../components/CinemaInfo/MovieFilter/MovieFilter';

import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cinemaGet } from '../api/api';
import { CinemaDataProps } from '../components/CreatePostRecruit/PostForm/Modal/type';
import NoMovie from './NoMovie';
import { useSelector } from 'react-redux';
import { ReduxType } from '../store/store';

const CinemaPage = () => {
  const [data, setData] = useState<CinemaDataProps>(undefined);

  // 오늘 날짜 년도-월-일 순서
  const dateNew = new Date();
  const month = dateNew.getMonth() + 1;
  const year = dateNew.getFullYear();
  const today = String(dateNew.getDate()).length !== 2 ? '0' + dateNew.getDate() : dateNew.getDate();
  const todayDate = `${year}-${month}-${today}`;

  const params = useParams();
  // 가로: 위도-latitude-Y값 , 세로: 경도-longitude-X값
  const { mylocationX, mylocationY } = useSelector((state: ReduxType) => state.myLocation.value);
  console.log('cinemaPage: ', mylocationX, mylocationY);
  const [dt, setDt] = useState(params.dt);

  const movieId = params.cinemaId;
  const [date, setDate] = useState(todayDate);
  const [lotte, setLotte] = useState(true);
  const [mega, setMega] = useState(true);
  const [cgv, setCgv] = useState(true);

  useEffect(() => {
    const cinemaData = async () => {
      const data = await cinemaGet(mylocationY, mylocationX, dt, movieId, date, lotte, mega, cgv);

      setData(data.data);
    };
    cinemaData();
  }, [mylocationY, mylocationX, dt, movieId, date, lotte, mega, cgv]);

  return (
    <Container>
      <SearchDiv>
        <Search />
      </SearchDiv>
      <Content>{data && <MoviePoster data={data.movieInfo} />}</Content>
      <FilterDiv>
        {data && <MovieFilter setDate={setDate} setLotte={setLotte} setMega={setMega} setCgv={setCgv} setDt={setDt} />}
      </FilterDiv>
      <Content>
        {data && data.cinemaInfo.length ? (
          <CinemaBox data={data.cinemaInfo} resultLength={data.cinemaInfo.length} dt={dt} />
        ) : (
          <NoMovie isSearch={false} />
        )}
      </Content>
    </Container>
  );
};

export default CinemaPage;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: var(--sub-color2);
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f6f6f6;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;

    /* background-color: red; */
  }
`;

// ********** 필터 적용을 어떻게 해야하지...?
// ******** 날짜만 바뀌거나 하면 제목이 없어지지 않나? 요청할때?
//  그럼 어떻게 해야할까...
