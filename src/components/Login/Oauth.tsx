import navericon from '../../assets/img/navericon.png';
import googleicon from '../../assets/img/googleicon.png';
import kakaoicon from '../../assets/img/kakaoicon.png';
import { styled } from 'styled-components';

const Oauth = () => {
  const googleOauth = () => {
    window.location.assign(`${import.meta.env.VITE_BASE_API}oauth2/authorization/google`);
  };

  return (
    <Container>
      <OauthButton className="kakao-div">
        <Content>
          <img className="kakao" src={kakaoicon} />
          <div className="kakao_start">카카오로 시작하기</div>
        </Content>
      </OauthButton>
      <OauthButton className="naver-div">
        <Content>
          <img src={navericon} />
          <div className="naver_start">네이버로 시작하기</div>
        </Content>
      </OauthButton>
      <OauthButton className="google-div" onClick={googleOauth}>
        <Content>
          <img src={googleicon} />
          <div className="google_start">구글 계정으로 시작하기</div>
        </Content>
      </OauthButton>
    </Container>
  );
};

export default Oauth;

const Container = styled.div`
  width: 328px;
  height: 224px;

  .kakao-div {
    background-color: #fee500;
  }

  .naver-div {
    background-color: #03c75a;
    margin: 16px 0px;
  }

  .google-div {
    background-color: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    width: 240px;
    height: 180px;

    .kakao-div {
      width: 100%;
    }

    .naver-div {
      width: 100%;
    }

    .google-div {
      width: 100%;
    }
  }
`;

const OauthButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 328px;
  height: 64px;
  border-radius: 8px;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 336px;
    height: 64px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    width: 240px;
    height: 52px;
    border-radius: 4px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 268px;

  .kakao {
    height: 24px;
    width: 24px;
  }
  > img {
    height: 28px;
    width: 28px;
  }

  > div {
    width: 220px;
    text-align: center;
  }

  .kakao_start {
    font-size: 20px;
    font-weight: 500;
    color: #181600;
  }
  .naver_start {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
  }
  .google_start {
    font-size: 20px;
    font-weight: 500;
    color: #525252;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    justify-content: space-around;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    justify-content: space-around;

    > div {
      width: 170px;
      text-align: center;
    }

    .kakao_start {
      font-size: 14px;
    }
    .naver_start {
      font-size: 14px;
    }
    .google_start {
      font-size: 14px;
    }
  }
`;
