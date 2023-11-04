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

  > svg {
    margin-top: 40px;
  }

  > div {
    margin-top: 30px;
    font-size: 28px;
    font-weight: 500;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    > svg {
      margin-top: 40px;
      width: 100px;
      height: 100px;
    }
    > div {
      font-size: 20px;
    }
  }
`;
