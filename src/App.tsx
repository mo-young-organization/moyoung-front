import { styled } from 'styled-components';
import RoutingPage from './pages/RoutingPage';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyle';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './store/store';

function App() {
  return (
    <Wrapper>
      <Provider store={store}>
        <CookiesProvider>
          <BrowserRouter>
            <GlobalStyles />
            <RoutingPage />
          </BrowserRouter>
        </CookiesProvider>
      </Provider>
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
