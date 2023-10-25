import { BsExclamationCircle } from 'react-icons/bs';
import { styled } from 'styled-components';

const NoSearchMovie = ({ text }) => {
  return (
    <Container>
      <BsExclamationCircle size="200" color="#FFD600" />
      <div>{text}</div>
    </Container>
  );
};

export default NoSearchMovie;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  > div {
    margin-top: 30px;
    font-size: 28px;
    font-weight: 500;
  }
`;
