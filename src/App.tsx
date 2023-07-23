import axios from 'axios';

import { styled } from 'styled-components';
import RoutingPage from './pages/RoutingPage';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
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
