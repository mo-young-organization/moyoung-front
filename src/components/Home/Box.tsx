import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GiTheater } from 'react-icons/gi';
import { PiUsersFour } from 'react-icons/pi';

const Box = () => {
  const navigate = useNavigate();

  const theaterHandler = () => {
    navigate('moviesearch');
  };

  const peoplelHandler = () => {
    navigate('recruitmentlist');
  };

  return (
    <Container>
      <div className="box" onClick={theaterHandler}>
        <GiTheater />
        <div className="text">내 주변 영화관 찾기</div>
      </div>
      <div className="box" onClick={peoplelHandler}>
        <PiUsersFour />
        <div className="text">영화 같이 볼 사람 찾기</div>
      </div>
    </Container>
  );
};

export default Box;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* flex-grow: 2; */
  @media all and (max-width: 1024px) {
    justify-content: space-between;
  }

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--point-color);

    text-align: center;

    width: 465px;
    height: 440px;
    border-radius: 36px;
    margin: 40px;
    cursor: pointer;

    > svg {
      width: 172px;
      height: 140px;
      margin-bottom: 40px;
      color: var(--sub-color1);
    }

    .text {
      font-size: 32px;
      font-weight: 700;
      color: var(--sub-color1);
    }

    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    @media all and (max-width: 1024px) {
      width: 335px;
      height: 320px;
      margin: 0px;

      .text {
        font-size: 24px;
      }
    }

    //브라우저 창 width가 767px보다 작아지는 순간부터 적용
    //모바일
    @media all and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      border-radius: 16px;

      width: 208px;
      height: 198px;

      > svg {
        width: 100px;
        height: 90px;
        margin-bottom: 20px;
      }

      .text {
        font-size: 20px;
      }
    }
  }
`;
