import navericon from '../../assets/img/네이버아이콘.png';
import googleicon from '../../assets/img/구글아이콘 원형.png';
import kakaoicon from '../../assets/img/카카오아이콘 원형.png';
import { styled } from 'styled-components';

const Oauth = () => {
  const googleOauth = () => {
    window.location.assign('https://2f7e-61-254-8-200.ngrok-free.app/oauth2/authorization/google');
  };

  return (
    <Container>
      <OauthButton className="kakao-div">
        <Content>
          <img className="kakao" src={kakaoicon} />
          <div>카카오로 로그인하기</div>
        </Content>
      </OauthButton>
      <OauthButton className="naver-div">
        <Content>
          <img src={navericon} />
          <div>네이버로 로그인하기</div>
        </Content>
      </OauthButton>
      <OauthButton className="google-div" onClick={googleOauth}>
        <Content>
          <img src={googleicon} />
          <div>구글 계정으로 로그인하기</div>
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
`;

const OauthButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 328px;
  height: 64px;
  border-radius: 8px;
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
`;
