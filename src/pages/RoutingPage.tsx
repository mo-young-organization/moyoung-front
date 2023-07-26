import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import MovieSearch from './MovieSearch';
import Login from './Login';

const RoutingPage = () => {
  return (
    <Conatainer>
      <NavBar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviesearch" element={<MovieSearch />} />
          <Route path="/login" element={<Login />} />
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

  min-height: 100vh;
  width: 100%;
`;
