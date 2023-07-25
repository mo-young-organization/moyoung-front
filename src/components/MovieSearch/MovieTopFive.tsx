import { styled } from 'styled-components';

type Props = {
  dummy: { MOVIE: string, JPG: string }[],
};

type ImgProps = {
  img: string,
};

const MovieTopFive = ({ dummy }: Props) => {
  return (
    <Container>
      {dummy.map((el, idx) => (
        <div key={idx}>
          <MovieBox img={el.JPG}>{idx + 1}</MovieBox>
          <MovieTitle>{el.MOVIE}</MovieTitle>
        </div>
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

const MovieBox = styled.div <ImgProps > `
  color: white;
  font-size: 24px;
  position: relative;

  width: 180px;
  height: 320px;

  background-image: url(${props => props.img});
  background-size: 100%;

  .poster {
    width: 100%;
    height: 100%;
  }
`;

const MovieTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;
