import axios from 'axios';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { styled } from 'styled-components';

function App() {
  console.log('hi');
  const api = import.meta.env.VITE_API;
  console.log(api);

  axios
    .get(`https://openapi.gg.go.kr/MovieTheater?key=${api}&Type=json&pIndex=1&pSize=100&SIGUN_NM=수원시`)
    .then(res => console.log(res))
    .catch(error => console.log(error));

  return (
    <Wrapper>
      <div>
        <NavBar />
        <ContentWrapper>
          <Home />
        </ContentWrapper>
        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
