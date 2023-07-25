import { styled } from 'styled-components';
import Search from '../components/MovieSearch/Search';
import MovieTopFive from '../components/MovieSearch/MovieTopFive';

import Dummy from "../data/Dummy"

const MovieSearch = () => {
  return (
    <Container>
      <div className='vicinity-movie'>
        <h1>내 주변 영화관 찾기</h1>
        <Search />
      </div>
      <div className='movie-top'>
        <div className='top5'>{`TOP${Dummy.length}`}</div>
        <MovieTopFive dummy={Dummy}/>
      </div>
    </Container>
  );
};

export default MovieSearch;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #efefef;

  .vicinity-movie {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 80px 0px 100px 0px;
  }

  .movie-top {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    .top5{
      font-size: 28px;
      line-height: 33px;
      border-bottom: 2px solid #D9D9D9;
      margin-bottom: 40px;
    }
  }
`;
