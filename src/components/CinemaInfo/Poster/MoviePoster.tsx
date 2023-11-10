import { styled } from 'styled-components';
import Explanation from './Explanation';

type ImgProps = {
  $jpg: string;
};

const MoviePoster = ({ data }) => {
  return (
    <Container>
      <Content>
        <MovieImg $jpg={data.thumbnailUrl} role="사진" />
        <InfoDiv>
          <div>
            <MovieTitle>
              <div className="kr-title">{data.name}</div>
              <div className="en-title">Spider-Man: Across the Spider-Verse</div>
            </MovieTitle>
            <MovieExplanation>
              <div className="first">영화설명</div>
              <div className="second">{data.info}</div>
            </MovieExplanation>
          </div>
          <Explanation data={data} />
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

const MovieImg = styled.div<ImgProps>`
  width: 240px;
  height: 315px;
  border-radius: 12px;
  margin-right: 24px;

  background-image: url(${props => props.$jpg});
  background-size: 100%;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 160px;
    height: 224px;

    margin: 0px 5px 0px 0px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 96px;
    height: 134px;
    border-radius: 4px;
    margin-right: 0px 5px 0px 0px;
  }
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

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    .kr-title {
      font-size: 36px;
      font-weight: 700;
    }

    .en-title {
      font-size: 16px;
      font-weight: 500;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    .kr-title {
      font-size: 24px;
      font-weight: 700;
    }

    .en-title {
      font-size: 14px;
      font-weight: 500;
    }
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

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 520px;
    height: auto;

    .first {
      font-size: 14px;
      font-weight: 500;
      color: #a2a2a2;

      width: 80px;
      text-align: center;
      margin-right: 10px;
    }

    .second {
      font-size: 14px;
      font-weight: 500;
      color: #474747;

      width: 700px;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 220px;
  }
`;
