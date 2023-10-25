import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import MovieSearch from './MovieSearch';
import Login from './Login';
import Signup from './Signup';
import SignupCheck from './SignupCheck';
import NoMovie from './NoMovie';
import OauthToken from './OauthToken';
import MovieDetail from './MovieDetail';
import RecruitmentListPage from './RecruitmentListPage';
import CinemaPage from './CinemaPage';
import RecruitPostCreatePage from './RecruitPostCreatePage';
import CinemaListPage from './CinemaListPage';

const RoutingPage = () => {
  return (
    <Conatainer>
      <NavBar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<OauthToken />} />
          <Route path="/signupcheck" element={<SignupCheck />} />
          <Route path="/moviesearch" element={<MovieSearch />} />
          <Route path="/nomovie" element={<NoMovie />} />
          <Route path="/moviedetail/:movieId" element={<MovieDetail />} />
          <Route path="/recruitmentlist" element={<RecruitmentListPage />} />
          <Route path="/cinemalist" element={<CinemaListPage />} />
          <Route path="/cinemainfo/:cinemaId" element={<CinemaPage />} />
          <Route path="/createpostrecruit" element={<RecruitPostCreatePage />} />
        </Routes>
      </ContentWrapper>
      <Footer />
    </Conatainer>
  );
};

export default RoutingPage;

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: #efefef; */
  min-height: 100vh;
  width: 100%;
`;
