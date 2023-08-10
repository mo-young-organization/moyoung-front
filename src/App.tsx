import { styled } from 'styled-components';
import RoutingPage from './pages/RoutingPage';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyle';

function App() {
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
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
