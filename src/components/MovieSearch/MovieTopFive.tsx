import { styled } from 'styled-components';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { getMovieTopFive } from '../../api/api';

import Carousel from './Carousel';

type Props = {
  classname?: string;
  text?: string;
  setClickMovieName?: Dispatch<SetStateAction<string>>;
};

export type TMovieTopFive = {
  date: string;
  ranks: {
    rank: string;
    name: string;
    thumbnailUrl: string;
  }[];
};

const MovieTopFive = ({ classname, text, setClickMovieName }: Props) => {
  const [topFiveData, setTopFiveData] = useState<TMovieTopFive | null>(null);

  // api요청
  useEffect(() => {
    const fetchRankedMovies = async () => {
      if (!topFiveData) {
        const rankedMovies = await getMovieTopFive();
        setTopFiveData(rankedMovies);
      }
    };

    fetchRankedMovies();
  }, []);

  return (
    <Container>
      <Title className={classname}>
        <span className="top5">{`${text ? text : 'Top ' + topFiveData?.ranks.length}`}</span>
      </Title>
      <Carousel topFiveData={topFiveData} setClickMovieName={setClickMovieName} />
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
