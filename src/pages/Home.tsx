import { styled } from 'styled-components';
import Title from '../components/Home/Title';
import Box from '../components/Home/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarColorStatus('main'));
  }, []);

  return (
    <Container>
      <Content>
        <Title />
        <Box />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: var(--main-color);
  display: flex;

  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 1200px;
  height: 100%;
`;
