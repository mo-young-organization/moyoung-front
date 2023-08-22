import styled from 'styled-components';
import { BsFillPeopleFill } from 'react-icons/bs';

const TopMovieInfo = () => {
  return (
    <TopMovieInfoWrpper>
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
              <span>89.1 만명</span>
            </div>
          </div>
        </div>
      </div>
    </TopMovieInfoWrpper>
  );
};

const TopMovieInfoWrpper = styled.article`
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
      .peopleWrapper {
        margin-left: 32px;
        .iconWrapper {
          display: flex;
          align-items: center;
          span {
            margin-left: 8px;
          }
        }
      }
    }
  }
`;

export default TopMovieInfo;
