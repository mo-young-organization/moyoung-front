import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import MovieSearch from './MovieSearch';
import Login from './Login';
import Signup from './Signup';
import SignupCheck from './SignupCheck';

const RoutingPage = () => {
  return (
    <Conatainer>
      <NavBar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviesearch" element={<MovieSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupCheck" element={<SignupCheck />} />
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

  background-color: #efefef;
  min-height: 100vh;
  width: 100%;
`;
