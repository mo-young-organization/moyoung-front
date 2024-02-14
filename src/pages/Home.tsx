import { styled } from 'styled-components';
import Title from '../components/Home/Title';
import Box from '../components/Home/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';
import { useGeoLocation } from '../hooks/useGeoLocation';
import { myLocationStatus } from '../store/reducers/myLocation';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarColorStatus('main'));
  }, []);

  // 내 위치 가져오기
  const geolocationOptions = {
    enableHighAccuracy: true, // 정확한 위치 가져올지
    timeout: 10 * 1000, // 위치 정보 얻을 때까지 기다릴 시간을 밀리초 단위로 지정
    maximumAge: 1000 * 3600 * 24, // 캐시된 위치 정보의 유효 시간을 밀리초로 지정하고, default 값은 0입니다.
  };

  const { location, error } = useGeoLocation(geolocationOptions);
  console.log(location);
  const loding = <div>로딩중 ...</div>;

  useEffect(() => {
    if (error) {
      alert('위치정보를 동의하지 않아. 주소정보는 기본 값으로 설정됩니다.');
    }
  }, [location, error]);

  if (!location) {
    return loding;
  }

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
