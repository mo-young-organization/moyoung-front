import { styled } from 'styled-components';

type Props = {
  dummy: { MOVIE: string }[],
};

const MovieTopFive = ({ dummy }: Props) => {
  
  return (
    <Container>
        {dummy.map((el,idx) => (
          <MovieBox key={idx}>{el.MOVIE}</MovieBox>
        ))}
    </Container>
  );
};

export default MovieTopFive;

const Container = styled.div`
  width: 1000px;
  height: 440px;

  display: flex;
  justify-content: space-around;
`;

const MovieBox = styled.div`
  border: 1px solid red;

  width: 180px;
  height: 320px;
`;