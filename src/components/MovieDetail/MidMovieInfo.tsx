import styled from 'styled-components';

const MidMovieInfo = () => {
  return (
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
  );
};

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

export default MidMovieInfo;
