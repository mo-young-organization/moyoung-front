import { styled } from 'styled-components';

type Props = {
  dummy: { MOVIE: string; JPG: string }[];
  text: string;
  classname?: string;
};

type ImgProps = {
  img: string;
};

const MovieTopFive = ({ dummy, text, classname }: Props) => {
  return (
    <Container>
      <Title className={classname}>
        <div className="top5">{text}</div>
      </Title>
      <Content>
        {dummy.map((el, idx) => (
          <div key={idx}>
            <MovieBox img={el.JPG}>
              <span className="number">{idx + 1}</span>
            </MovieBox>
            <MovieTitle>{el.MOVIE}</MovieTitle>
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default MovieTopFive;

const Container = styled.div`
  width: 1032px;
  height: 440px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;

  .left {
    /* background-color: red; */
    border: none;
    display: flex;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 33px;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
`;

const MovieBox = styled.div<ImgProps>`
  display: flex;
  align-items: end;
  color: white;
  font-size: 24px;
  position: relative;

  width: 180px;
  height: 320px;
  margin: 14px;

  background-image: url(${props => props.img});
  background-size: 100%;

  .poster {
    width: 100%;
    height: 100%;
  }

  .number {
    margin-left: 10px;
    font-size: 38px;
  }
`;

const MovieTitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  text-align: center;
`;
