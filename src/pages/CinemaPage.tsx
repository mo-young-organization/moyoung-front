import MoviePoster from '../components/CinemaInfo/Poster/MoviePoster';
import Search from '../components/MovieSearch/Search';
import CinemaBox from '../components/CinemaInfo/CinemaBox';
import MovieFilter from '../components/CinemaInfo/MovieFilter/MovieFilter';
import Dummy from '../data/Dummy';
import { styled } from 'styled-components';

const CinemaPage = () => {
  const dummy = Dummy[0];

  return (
    <Container>
      <div>
        <Search />
      </div>
      <ContentPoster>
        <MoviePoster jpg={dummy.JPG} />
      </ContentPoster>
      <div>
        <MovieFilter />
      </div>
      <div>
        <CinemaBox />
      </div>
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

const ContentPoster = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;
