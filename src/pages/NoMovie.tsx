import { styled } from 'styled-components';
import MovieTopFive from '../components/MovieSearch/MovieTopFive';
import Search from '../components/MovieSearch/Search';
import NoSearchMovie from '../components/NoMovie/NoSearchMovie';
import { useState } from 'react';

const NoMovie = ({ isSearch }) => {
  const [clickMovieName, setClickMovieName] = useState('');

  return (
    <Container className={isSearch ? 'true' : 'false'}>
      {isSearch ? (
        <>
          <div className="first-div">
            <Search clickMovieName={clickMovieName} />
          </div>
          <NoSearchMovie text={'현재 주변에 상영중인 영화관이 없습니다.'} />
          <div className="left">
            <MovieTopFive text="이런 영화는 어때요?" classname="left" setClickMovieName={setClickMovieName} />
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
    height: 100%;
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
