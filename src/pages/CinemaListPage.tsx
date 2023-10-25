import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../components/MovieSearch/Search';
import all from '../assets/img/all.svg';
import twelve from '../assets/img/12years.svg';
import Fifteen from '../assets/img/15years.svg';
import Eighteen from '../assets/img/18years.svg';

interface ThumbnailProps {
  $img: string;
}

const CinemaListPage = () => {
  const navigate = useNavigate();
  //   navigate시 넘겨준 state값을 불러 올 수 있다.
  const location = useLocation();
  const data = location.state;

  const clickHandler = movieId => {
    navigate(`/cinemainfo/${movieId}`);
  };

  const audience = text => {
    if (text.includes('12')) {
      return twelve;
    } else if (text.includes('15')) {
      return Fifteen;
    } else if (text.includes('청소년')) {
      return Eighteen;
    } else if (text.includes('전체')) {
      return all;
    }
  };

  return (
    <Container>
      <SearchDiv>
        <Search />
      </SearchDiv>
      <ContentUl>
        {data.map(el => (
          <BoxLi key={el.name}>
            <LiContentDiv>
              <MovieInfoDiv>
                <ThumbnailDiv $img={el.thumbnailUrl} role="img" />
                <TitleDiv>
                  <div>
                    <div className="name">{el.name}</div>
                    <div className="enName">{el.enName}</div>
                  </div>
                  <div>
                    <img className="img" src={el.movieRating && audience(el.movieRating)} />
                  </div>
                </TitleDiv>
              </MovieInfoDiv>
              <BoxUl>
                {el.typeList.map(data => (
                  <BoxLis key={data.movieId} role="button" onClick={() => clickHandler(data.movieId)}>
                    <div>
                      <div className="type">{data.type}</div>
                      <div className="count">{data.count}건</div>
                    </div>
                    <div>&gt;</div>
                  </BoxLis>
                ))}
              </BoxUl>
            </LiContentDiv>
          </BoxLi>
        ))}
      </ContentUl>
    </Container>
  );
};

export default CinemaListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: #efefef;
`;

const ContentUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  list-style: none;
`;

const BoxLi = styled.li`
  width: 1032px;

  border: 1px solid #cccccc;
  border-radius: 8px;

  padding: 54px 64px;
  margin: 40px 0px;
`;

const LiContentDiv = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const MovieInfoDiv = styled.div`
  display: flex;
  width: 70%;

  .name {
    font-size: 24px;
    font-weight: 600;
  }

  .enName {
    font-size: 16px;
    font-weight: 300;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  margin-left: 12px;

  .img {
    width: 24px;
    height: 24px;
  }
`;

const BoxUl = styled.ul`
  width: 30%;
  padding-left: 60px;

  border-left: 1px solid #e1e1e1;
  list-style: none;
`;

const BoxLis = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 16px;
  width: 200px;
  height: 90px;
  border-radius: 8px;

  background-color: #538dff;
  cursor: pointer;

  .type {
    font-size: 20px;
    font-weight: 600;
    color: white;
  }

  .count {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 400;
    color: #e1e1e1;
  }
`;

const ThumbnailDiv = styled.div<ThumbnailProps>`
  width: 100px;
  height: 140px;
  background-image: url(${props => props.$img});
  background-size: 100%;

  border-radius: 8px;
`;
