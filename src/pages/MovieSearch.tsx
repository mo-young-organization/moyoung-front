import { styled } from 'styled-components';
import Search from '../components/MovieSearch/Search';
import MovieTopFive from '../components/MovieSearch/MovieTopFive';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';

const MovieSearch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarColorStatus('navy'));
  }, []);

  return (
    <Container>
      <Search />
      <MovieTopFive />
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
