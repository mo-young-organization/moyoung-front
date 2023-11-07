import { styled } from 'styled-components';
import NavyLogo from '../../assets/img/moyoungnabylogo.png';

const Title = () => {
  return (
    <Container>
      <div className="main-title">
        <span>내 주변에 있는 영화관만 모아서 한번에</span>
      </div>
      <div>
        <img className="main-logo" src={NavyLogo} alt="로고 이미지" />
      </div>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  /* flex-grow: 1; */

  .main-title {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    @media all and (max-width: 1024px) {
      font-size: 32px;
      font-weight: 700;
      color: var(--sub-color2);
    }

    //브라우저 창 width가 767px보다 작아지는 순간부터 적용
    //모바일
    @media all and (max-width: 767px) {
      margin-top: 40px;

      width: 200px;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
      color: var(--sub-color2);
    }

    font-size: 36px;
    font-weight: 700;
    color: var(--sub-color2);
  }

  .main-logo {
    width: 460px;
    height: 115px;
    margin-bottom: 30px;

    //브라우저 창 width가 767px보다 작아지는 순간부터 적용
    //모바일
    @media all and (max-width: 767px) {
      width: 200px;
      height: 48px;
    }
  }
`;
