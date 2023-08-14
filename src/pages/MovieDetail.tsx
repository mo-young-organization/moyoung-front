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
            <span className="content">애니메이션/액션/어드벤처 | 미국</span>
          </li>
          <li>
            <span className="name">감독</span>
            <span className="content">조아킴 도스 샌토스 , 캠프 파워스, 저스틴 K 톰슨</span>
          </li>
          <li>
            <span className="name">출연</span>
            <span className="content">휴 잭맨, 그 영화배우, 걔</span>
          </li>
        </ul>
      </MovieInfo>
      <MovieStory>
        <div className="title">주요 정보</div>
        <div className="movieStoryWrapper">
          불가능한 꿈, 그 이상의 쇼! 쇼 비즈니스의 창시자이자, 꿈의 무대로 전세계를 매료시킨 남자 ‘바넘’의 이야기에서
          영감을 받아 탄생한 오리지널 뮤지컬 영화 &lt;위대한 쇼맨&rt;. &lt;레미제라블&rt; 이후 다시 뮤지컬 영화로 돌아온
          휴 잭맨부터 잭 에프론, 미셸 윌리엄스, 레베카 퍼거슨, 젠데이아까지 할리우드 최고의 배우들이 합류해 환상적인
          앙상블을 선보인다. 여기에 &lt;미녀와 야수&rt; 제작진과 &lt;라라랜드&rt; 작사팀의 합류로 더욱 풍성해진 비주얼과
          스토리, 음악까지 선보일 &lt;위대한 쇼맨&rt;은 ‘우리는 누구나 특별하다’는 메시지로 관객들에게 재미는 물론,
          감동까지 선사할 것이다. THIS IS ME! 우리는 누구나 특별하다!
        </div>
      </MovieStory>
      <MovieTrailer></MovieTrailer>
      <MoviePhoto></MoviePhoto>
    </Content>
  );
};

const Content = styled.main`
  background-color: pink;
  width: 1200px;
  min-height: 100vh;
  .title {
    font-weight: bold;
  }
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
  .liWrapper {
    li {
      list-style-type: none;
    }
  }
`;
const MovieStory = styled.article`
  padding: 32px 100px;
`;
const MovieTrailer = styled.article``;
const MoviePhoto = styled.article``;

export default MovieDetail;
