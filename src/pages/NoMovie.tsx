import { styled } from 'styled-components';
import MovieTopFive from '../components/MovieSearch/MovieTopFive';
import Search from '../components/MovieSearch/Search';

import Dummy from '../data/Dummy';
import NoSearchMovie from '../components/NoMovie/NoSearchMovie';

const NoMovie = ({ isSearch }) => {
  return (
    <Container className={isSearch ? 'true' : 'false'}>
      {isSearch ? (
        <>
          <div className="first-div">
            <Search />
          </div>
          <NoSearchMovie text={'현재 주변에 상영중인 영화관이 없습니다.'} />
          <div className="left">
            <MovieTopFive text="이런 영화는 어때요?" classname="left" />
          </div>
        </>
      ) : (
        <NoSearchMovie text={'현재 주변에 상영중인 영화관이 없습니다.'} />
      )}
    </Container>
  );
};

export default NoMovie;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &.true {
    width: 100%;
    height: 1500px;
  }

  &.false {
    width: 100%;
    height: 500px;
  }

  .first-div {
    display: flex;
    justify-content: center;
    width: 100%;

    background-color: #f0f5fe;
  }
`;
