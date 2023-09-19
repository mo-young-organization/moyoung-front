import { styled } from 'styled-components';
import Search from '../components/MovieSearch/Search';
import MovieTopFive from '../components/MovieSearch/MovieTopFive';

import Dummy from '../data/Dummy';

const MovieSearch = () => {
  return (
    <Container>
      <Search />
      <MovieTopFive dummy={Dummy} text={`TOP${Dummy.length}`} />
    </Container>
  );
};

export default MovieSearch;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #efefef;
`;
