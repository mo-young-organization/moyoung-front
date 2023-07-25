import axios from 'axios';
import { styled } from 'styled-components';
import RoutingPage from './pages/RoutingPage';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyle';

function App() {
  const api_key = import.meta.env.VITE_API_KEY;
  console.log(api_key);

  axios
    .get(`https://openapi.gg.go.kr/MovieTheater?key=${api_key}&Type=json&pIndex=1&pSize=100&SIGUN_NM=수원시`)
    .then(res => console.log(res))
    .catch(error => console.log(error));

  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <RoutingPage />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
`;
