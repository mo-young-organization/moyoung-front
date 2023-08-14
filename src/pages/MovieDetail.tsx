import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BsFillPeopleFill } from 'react-icons/bs';

const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <Content>
      <TopInfo>
        <img
          src="https://i.namu.wiki/i/56BiysI_KiUAO0Aj85ntQ-fvmpYWnk3QzIcyeSK-3_MKoL0nf2vLoD24G61W350QXTBEDKtdJtbE_uyZfiJPRA.webp"
          alt="영화 포스터 사진"
          className="movieImg"
        />
        <div className="topinfoWrapper">
          <div className="titleWrapper">
            <h2 className="koreanTitle">위대한 쇼맨</h2>
            <span className="englishTitle">The Greatest Showman, 2017</span>
          </div>
          <div className="infoWrapper">
            <span>2017.12.3 개봉</span> | <span>전체 관람가</span> | <span>139분</span>
          </div>
          <div className="buttonWrapper">
            <button className="findButton">내 주변 영화관 찾기</button>
            <div className="peopleWrapper">
              <div>누적 관객수</div>
              <div className="iconWrapper">
                <BsFillPeopleFill />
                <span>89.1 명</span>
              </div>
            </div>
          </div>
        </div>
      </TopInfo>
      <MovieInfo>
        <div className="title">영화 정보</div>
        <ul className="liWrapper">
          <li>
            <span className="name">장르</span>
            <span className="content"></span>
          </li>
          <li>
            <span className="name">감독</span>
            <span className="content"></span>
          </li>
          <li>
            <span className="name">출연</span>
            <span className="content"></span>
          </li>
        </ul>
      </MovieInfo>
      <MovieStory></MovieStory>
      <MovieTrailer></MovieTrailer>
      <MoviePhoto></MoviePhoto>
    </Content>
  );
};

const Content = styled.main`
  background-color: pink;
  width: 1200px;
  min-height: 100vh;
`;
const TopInfo = styled.article`
  display: flex;
  padding: 100px;
  .movieImg {
    width: 328px;
    height: 473px;
  }
  .topinfoWrapper {
    display: flex;
    margin-left: 32px;
    flex-direction: column;
    justify-content: space-between;
    .titleWrapper {
      display: flex;
      flex-direction: column;
      h2 {
        margin: 0;
      }
    }
    .infoWrapper {
    }
    .buttonWrapper {
      display: flex;
    }
  }
`;
const MovieInfo = styled.article`
  background-color: #f5f5f5;
  width: 100vw;
  padding: 32px 100px;
  .title {
    font-weight: bold;
  }
  .liWrapper {
    li {
      list-style-type: none;
    }
  }
`;
const MovieStory = styled.article``;
const MovieTrailer = styled.article``;
const MoviePhoto = styled.article``;

export default MovieDetail;
