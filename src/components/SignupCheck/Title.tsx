import { styled } from 'styled-components';
import NavyLogo from '../../assets/img/moyoungnabylogo.png';

const Title = () => {
  return (
    <Container>
      <Font>
        환영합니다! <br />
        <span className="font-color">모영</span>에서 사용할 정보를 입력해주세요
      </Font>
      <div>
        <img src={NavyLogo} alt="로고 이미지" />
      </div>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 680px;
  height: 100px;

  margin-bottom: 8px;
  border-bottom: 1px solid #d9d9d9;

  img {
    width: 142px;
    height: 35px;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 512px;
    img {
      width: 73px;
      height: 18px;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 208px;
    height: 120px;

    img {
      width: 38px;
      height: 10px;
    }
  }
`;

const Font = styled.div`
  font-size: 34px;
  font-weight: 700;
  line-height: 38px;

  .font-color {
    color: var(--main-color);
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    font-size: 24px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 147px;
    line-height: 28px;
    font-size: 16px;
  }
`;
