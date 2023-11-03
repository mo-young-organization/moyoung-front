import { styled } from 'styled-components';
import NavyLogo from '../../assets/img/moyoungnabylogo.png';
import { useNavigate } from 'react-router-dom';

const LeftTitle = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <img className="logo" alt="로고 이미지" src={NavyLogo} onClick={() => navigate('/')} />
      </div>
      <div>
        <div className="title">
          안녕하세요
          <br />
          주변 영화관 시간표 검색 플랫폼
          <br />
          <span className="text">모영</span>입니다.
        </div>
      </div>
    </Container>
  );
};

export default LeftTitle;

const Container = styled.div`
  width: 405px;
  height: 365px;

  .logo {
    cursor: pointer;
    width: 230px;
    height: 56px;
    margin-bottom: 30px;
  }

  .title {
    font-size: 32px;
    font-weight: 700;
  }
  .text {
    color: var(--main-color);
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 336px;
    height: 205px;

    .logo {
      cursor: pointer;
      width: 217px;
      height: 53px;
      margin-bottom: 15px;
    }

    .title {
      font-size: 24px;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    width: 208px;
    height: 120px;

    .logo {
      cursor: pointer;
      width: 95px;
      height: 24px;
      margin-bottom: 15px;
    }

    .title {
      font-size: 16px;
    }
  }
`;
