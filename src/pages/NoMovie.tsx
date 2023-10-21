import { styled } from 'styled-components';
import MovieTopFive from '../components/MovieSearch/MovieTopFive';
import Search from '../components/MovieSearch/Search';

import Dummy from '../data/Dummy';
import NoSearchMovie from '../components/NoMovie/NoSearchMovie';

const NoMovie = () => {
  return (
    <Container>
      <div>
        <Search />
      </div>
      <NoSearchMovie />
      <div className="left">
        <MovieTopFive text="이런 영화는 어때요?" classname="left" />
      </div>
    </Container>
  );
};

export default NoMovie;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 1500px;

  > div:first-child {
    display: flex;
    justify-content: center;
    width: 100%;

    background-color: #f0f5fe;
  }
`;
