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
        <div className="top5">{`${text ? text : 'Top ' + topFiveData?.ranks.length}`}</div>
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
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 33px;
  border-bottom: 2px solid;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
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
`;

const MovieTitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  text-align: center;
`;
