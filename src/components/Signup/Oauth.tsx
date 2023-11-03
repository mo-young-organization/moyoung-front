import navericon from '../../assets/img/navericon.png';
import googleicon from '../../assets/img/googleicon.png';
import kakaoicon from '../../assets/img/kakaoicon.png';
import { styled } from 'styled-components';

const Oauth = () => {
  return (
    <Container>
      <OauthButton>
        <img className="kakao" src={kakaoicon} />
      </OauthButton>
      <OauthButton className="naver-div">
        <img src={navericon} />
      </OauthButton>
      <OauthButton className="google-div">
        <img src={googleicon} />
      </OauthButton>
    </Container>
  );
};

export default Oauth;

const Container = styled.div`
display: flex;
justify-content: center;

  width: 328px;
  height: 100px;
  margin-bottom: 54px;

  .naver-div {
    background-color: #03c75a;
    margin: 0px 32px;
  }

  .google-div {
    background-color: #EBEBEB;
  }
`;

const OauthButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  border-radius: 32px;

  background-color: #FEE500;

  .kakao {
    width: 24px;
    height: 24px;
  }

  > img:not(.kakao) {
    height: 30px;
    width: 30px;
  }
`;
