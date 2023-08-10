import MovieTopFive from '../components/MovieSearch/MovieTopFive';
import Search from '../components/MovieSearch/Search';

import Dummy from '../data/Dummy';

const NoMovie = () => {
  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        현재 상영중인 영화가 없습니다.
      </div>
      <div>
        <MovieTopFive dummy={Dummy} />
      </div>
    </div>
  );
};

export default NoMovie;


