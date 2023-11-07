import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

import { getMovieTopFive } from '../../api/api';

type Props = {
  classname?: string;
  text?: string;
};

type ImgProps = {
  $img: string;
};

export type TMovieTopFive = {
  date: string;
  ranks: {
    rank: string;
    name: string;
    thumbnailUrl: string;
  }[];
};

const MovieTopFive = ({ classname, text }: Props) => {
  const [topFiveData, setTopFiveData] = useState<TMovieTopFive | null>(null);

  const fetchRankedMovies = async () => {
    const rankedMovies = await getMovieTopFive();
    setTopFiveData(rankedMovies);
  };
  useEffect(() => {
    fetchRankedMovies();
  }, []);
  return (
    <Container>
      <Title className={classname}>
        <span className="top5">{`${text ? text : 'Top ' + topFiveData?.ranks.length}`}</span>
      </Title>
      <Content>
        {topFiveData?.ranks.map((el, idx) => (
          <div key={idx}>
            <MovieBox $img={el.thumbnailUrl}>
              <span className="number">{idx + 1}</span>
            </MovieBox>
            <MovieTitle>{el.name.length > 8 ? `${el.name.slice(0, 9)}...` : el.name}</MovieTitle>
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
  margin: 64px 84px 142px;

  .left {
    border: none;
    display: flex;
    width: 100%;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;

    justify-content: flex-start;
  }
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 33px;

  text-align: center;

  width: 100%;

  > span {
    border-bottom: 2px solid;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    margin: 0px 0px 40px 0px;

    > div {
      font-size: 20px;
    }
  }
`;

const Content = styled.div`
  display: flex;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
    }
    & {
      -ms-overflow-style: none; /* 인터넷 익스플로러 */
      scrollbar-width: none; /* 파이어폭스 */
    }
    width: 100%;
    overflow-x: scroll;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
  }
`;

const MovieBox = styled.div<ImgProps>`
  display: flex;
  align-items: end;
  color: #e1e1e1;
  font-size: 24px;
  position: relative;

  width: 180px;
  height: 255px;
  margin: 14px;
  border-radius: 8px;

  background-image: url(${props => props.$img});
  background-size: 100%;

  .number {
    margin-left: 10px;
    font-size: 38px;
    text-shadow: 4px 6px 4px #000000;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 108px;
    height: 152px;
    margin: 5px;

    .number {
      font-size: 28px;
    }
  }
`;

const MovieTitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  text-align: center;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    font-size: 14px;
  }
`;
