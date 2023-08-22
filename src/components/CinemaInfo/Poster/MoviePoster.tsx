import { styled } from 'styled-components';
import Explanation from './Explanation';

type ImgProps = {
  jpg: string;
};

const MoviePoster = ({ jpg }: ImgProps) => {
  return (
    <Content>
      <MovieImg jpg={jpg}>사진</MovieImg>
      <InfoDiv>
        <MovieTitle>
          <div className="kr-title">스파이더맨: 어크로스 더 유니버스</div>
          <div className="en-title">Spider-Man: Across the Spider-Verse</div>
        </MovieTitle>
        <Explanation />
      </InfoDiv>
    </Content>
  );
};

export default MoviePoster;

const Content = styled.div`
  display: flex;
  width: 1031px;
`;

const MovieImg = styled.div<ImgProps>`
  width: 240px;
  height: 337px;
  border-radius: 12px;
  margin-right: 24px;

  background-image: url(${props => props.jpg});
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

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
