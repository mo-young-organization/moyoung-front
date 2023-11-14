import { styled } from 'styled-components';
import Search from '../components/MovieSearch/Search';
import MovieTopFive from '../components/MovieSearch/MovieTopFive';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';

const MovieSearch = () => {
  const dispatch = useDispatch();
  const [clickMovieName, setClickMovieName] = useState('');

  useEffect(() => {
    dispatch(navbarColorStatus('navy'));
  }, []);

  return (
    <Container>
      <Content>
        <Search clickMovieName={clickMovieName} />
        <MovieTopFive setClickMovieName={setClickMovieName} />
      </Content>
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
  background-color: var(--sub-color2);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1032px;
  height: 100%;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
  }
`;
