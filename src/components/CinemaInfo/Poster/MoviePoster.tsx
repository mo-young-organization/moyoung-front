import { styled } from 'styled-components';
import Explanation from './Explanation';

type ImgProps = {
  $jpg: string;
};

const MoviePoster = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Content>
        <MovieImg $jpg={data.movieInfo.thumbnailUrl}>사진</MovieImg>
        <InfoDiv>
          <div>
            <MovieTitle>
              <div className="kr-title">{data.movieInfo.name}</div>
              {/* <div className="en-title">Spider-Man: Across the Spider-Verse</div> */}
            </MovieTitle>
            <MovieExplanation>
              <div className="first">영화설명</div>
              <div className="second">{data.movieInfo.info}</div>
            </MovieExplanation>
          </div>
          <Explanation data={data.movieInfo} />
        </InfoDiv>
      </Content>
    </Container>
  );
};

export default MoviePoster;

const Container = styled.div`
  width: 1200px;
`;

const Content = styled.div`
  display: flex;
  width: 1031px;
  margin: 74px 85px 67px 84px;
`;

const MovieImg = styled.div<ImgProps>`
  width: 240px;
  height: 337px;
  border-radius: 12px;
  margin-right: 24px;

  background-image: url(${props => props.$jpg});
  background-size: 100%;
`;

const MovieTitle = styled.div`
  .kr-title {
    font-size: 44px;
    font-weight: 700;
  }

  .en-title {
    font-size: 20px;
    font-weight: 500;
  }
`;

const MovieExplanation = styled.div`
  display: flex;

  .first {
    font-size: 16px;
    font-weight: 500;
    color: #a2a2a2;

    width: 64px;
    text-align: center;
    margin-right: 24px;
  }

  .second {
    font-size: 16px;
    font-weight: 500;
    color: #474747;

    width: 700px;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
