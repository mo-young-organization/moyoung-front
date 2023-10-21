import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

  return (
    <div>
      <h1>리스트 페이지</h1>
      <ul>
        {data.data.map(el => (
          <li key={el.movieId} onClick={() => clickHandler(el.movieId)}>
            <ThumbnailDiv $img={el.thumbnailUrl} role="img" />
            <div>{el.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CinemaListPage;

const ThumbnailDiv = styled.div<ThumbnailProps>`
  width: 300px;
  height: 400px;
  background-image: url(${props => props.$img});
  background-size: 100%;
`;
