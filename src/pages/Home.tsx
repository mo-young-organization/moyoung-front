import { styled } from 'styled-components';
import Title from '../components/Home/Title';
import Box from '../components/Home/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';
import { ReduxType } from '../store/store';
import { useGeoLocation } from '../hooks/useGeoLocation';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarColorStatus('main'));
  }, []);

  const { error } = useGeoLocation();
  useEffect(() => {
    if (error) {
      alert('주소를 동의 하지 않았습니다.');
    }
  }, [error]);

  const { mylocationX, mylocationY } = useSelector((state: ReduxType) => state.myLocation.location.value);

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
  justify-content: center;
  flex-direction: column;

  width: 1200px;
  height: 100%;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
  }
`;
