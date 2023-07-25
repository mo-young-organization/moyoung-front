import navericon from '../../assets/img/네이버아이콘.png';
import googleicon from '../../assets/img/구글아이콘.svg';
import kakao from '../../assets/img/카카오로그인.png';
import { styled } from 'styled-components';

const Oauth = () => {
  return (
    <Container>
      <OauthButton>
        <img className="kakao" src={kakao} />
        {/* <div>카카오로 로그인하기</div> */}
      </OauthButton>
      <OauthButton className="naver-div">
        <img src={navericon} />
        <div>네이버로 로그인하기</div>
      </OauthButton>
      <OauthButton className="google-div">
        <img src={googleicon} />
        <div>구글 계정으로 로그인하기</div>
      </OauthButton>
    </Container>
  );
};

export default Oauth;

const Container = styled.div`
  width: 328px;
  height: 224px;

  .naver-div {
    background-color: #03c75a;
    margin: 16px 0px;
  }

  .google-div {
    background-color: #ffffff;
  }
`;

const OauthButton = styled.div`
  display: flex;
  align-items: center;

  width: 328px;
  height: 64px;
  border-radius: 8px;

  .kakao {
    width: 328px;
    height: 64px;
  }

  > img:not(.kakao) {
    height: 24px;
    width: 24px;
  }
`;
