import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import TopMovieInfo from '../components/MovieDetail/TopMovieInfo';
import MidMovieInfo from '../components/MovieDetail/MidMovieInfo';

const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);
  // AIzaSyCwqGJGZtRte2upFi6ss6fKkzrIzkJM5n0
  const iframeProps = {
    id: 'ytplayer',
    type: 'text/html',
    width: '720',
    height: '405',
    src: 'https://www.youtube.com/embed/AIzaSyCwqGJGZtRte2upFi6ss6fKkzrIzkJM5n0',
    frameBorder: '0',
    allowFullScreen: true,
  };
  return (
    <Content>
      <TopMovieInfo />
      <MidMovieInfo />
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
      <MovieTrailer>
        <div className="title">트레일러</div>
        <div className="movieTrailerWrpper">
          <iframe {...iframeProps}></iframe>
        </div>
      </MovieTrailer>
      <MoviePhoto>
        <div className="title">스틸컷</div>
        <div className="moviePhotoWrapper">
          <img
            src="https://i.namu.wiki/i/56BiysI_KiUAO0Aj85ntQ-fvmpYWnk3QzIcyeSK-3_MKoL0nf2vLoD24G61W350QXTBEDKtdJtbE_uyZfiJPRA.webp"
            alt="movie photo"
          />
        </div>
      </MoviePhoto>
    </Content>
  );
};

const Content = styled.main`
  /* background-color: pink; */
  width: 1200px;
  min-height: 100vh;
  > * {
    max-width: 100%;
  }
  .title {
    font-weight: bold;
  }
`;

const MovieStory = styled.article`
  padding: 32px 100px;
`;
const MovieTrailer = styled.article`
  padding: 32px 100px;
`;
const MoviePhoto = styled.article`
  padding: 32px 100px;
`;

export default MovieDetail;
