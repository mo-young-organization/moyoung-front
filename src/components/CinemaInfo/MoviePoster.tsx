import { styled } from 'styled-components';

type ImgProps = {
  jpg: string;
};

const MoviePoster = ({ jpg }: ImgProps) => {
  return (
    <div>
      <MovieImg jpg={jpg}>사진</MovieImg>
      <div>
        <div>
          <div>스파이더맨: 어크로스 더 유니버스</div>
          <div>Spider-Man: Across the Spider-Verse</div>
        </div>
        <div>
          <div>
            <span>개봉</span>
            <span>2023.06.21</span>
          </div>
          <div>
            <span>개요</span>
            <span>전체관람가, 139분</span>
          </div>
          <div>
            <span>장르</span>
            <span>애니메이션/액션/어드벤처</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;

const MovieImg = styled.div<ImgProps>`
  width: 240px;
  height: 337px;
  border-radius: 12px;

  background-image: url(${props => props.jpg});
  background-size: 100%;
`;
