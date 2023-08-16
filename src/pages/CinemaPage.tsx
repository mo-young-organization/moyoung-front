import MoviePoster from '../components/CinemaInfo/MoviePoster';
import Search from '../components/MovieSearch/Search';
import CinemaBox from '../components/CinemaInfo/CinemaBox';
import MovieFilter from '../components/CinemaInfo/MovieFilter';
import Dummy from '../data/Dummy';

const CinemaPage = () => {
  const dummy = Dummy[0];

  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <MoviePoster jpg={dummy.JPG} />
      </div>
      <div>
        <MovieFilter />
      </div>
      <div>
        <CinemaBox />
      </div>
    </div>
  );
};

export default CinemaPage;
