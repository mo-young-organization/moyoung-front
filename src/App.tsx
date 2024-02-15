import { styled } from 'styled-components';
import RoutingPage from './pages/RoutingPage';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyle';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App() {
  const persistor = persistStore(store);

  return (
    <Wrapper>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CookiesProvider>
            <BrowserRouter>
              <GlobalStyles />
              <RoutingPage />
            </BrowserRouter>
          </CookiesProvider>
        </PersistGate>
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
