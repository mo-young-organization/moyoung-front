import MoviePoster from '../components/CinemaInfo/Poster/MoviePoster';
import Search from '../components/MovieSearch/Search';
import CinemaBox from '../components/CinemaInfo/Cinema/CinemaBox';
import MovieFilter from '../components/CinemaInfo/MovieFilter/MovieFilter';

import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cinemaGet } from '../api/api';
import { CinemaDataProps } from '../components/CreatePostRecruit/PostForm/Modal/type';

const CinemaPage = () => {
  const [data, setData] = useState<CinemaDataProps>();
  // console.log(data.cinemaInfo.length);

  // 오늘 날짜 년도-월-일 순서
  const dateNew = new Date();
  const month = dateNew.getMonth() + 1;
  const year = dateNew.getFullYear();
  const today = dateNew.getDate();
  const todayDate = `${year}-${month}-${today}`;

  const params = useParams();
  const lat = '37.498';
  const lon = '127.026';
  const dt = 10000;
  const movieId = params.cinemaId;
  const [date, setDate] = useState(todayDate);
  const early = false;
  const lotte = true;
  const mega = true;

  useEffect(() => {
    const cinemaData = async () => {
      const data = await cinemaGet(lat, lon, dt, movieId, date, early, lotte, mega);
      console.log(lat, lon, dt, movieId, date, early, lotte, mega);
      setData(data.data);
    };
    cinemaData();
  }, [lat, lon, dt, movieId, date, early, lotte, mega]);

  return (
    <Container>
      <SearchDiv>
        <Search />
      </SearchDiv>
      <Content>{data && <MoviePoster data={data.movieInfo} />}</Content>
      <div>
        <MovieFilter setDate={setDate} />
      </div>
      <Content>{data && <CinemaBox data={data.cinemaInfo} />}</Content>
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
  background-color: #efefef;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

// ********** 필터 적용을 어떻게 해야하지...?
// ******** 날짜만 바뀌거나 하면 제목이 없어지지 않나? 요청할때?
//  그럼 어떻게 해야할까...
