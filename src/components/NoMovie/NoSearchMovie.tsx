import { BiCameraMovie } from 'react-icons/bi';
import { styled } from 'styled-components';

const NoSearchMovie = () => {
  return (
    <Container>
      <BiCameraMovie size="200"/>
      <div>현재 상영중인 영화가 없습니다.</div>
    </Container>
  );
};

export default NoSearchMovie;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
