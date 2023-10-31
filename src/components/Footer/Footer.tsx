import { styled } from 'styled-components';
import Name from './Name';
import { BsGithub } from 'react-icons/bs';
import WhiteLogo from '../../assets/img/모영흰색로고.png';

const Footer = () => {
  return (
    <Container>
      <Content>
        <div className="member">
          <Name name="이세영" role="Front-end" email="dlsy031@gmail.com" link="https://github.com/LEE2302">
            <BsGithub></BsGithub>
          </Name>
          <Name name="김현우" role="Front-end" email="khw786678@gmail.com" link="https://github.com/kimhw7">
            <BsGithub></BsGithub>
          </Name>
          <Name name="송준상" role="Back-end" email="thdwns0331@gmail.com" link="https://github.com/DDunDDang">
            <BsGithub></BsGithub>
          </Name>
          <Name name="최영아" role="Design" email="khancya@gmail.com" />
        </div>
        <div className="logo-div">
          <img className="logo" alt="로고 이미지" src={WhiteLogo} />
          <div className="text">주변 영화관 시간표 검색 플랫폼</div>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: var(--sub-color1);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1200px;
  height: 100%;

  @media all and (max-width: 1024px) {
    width: 690px;
  }

  .logo-div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    padding-bottom: 15px;
  }

  .logo {
    width: 145px;
    height: 40px;
  }

  .text {
    font-size: 12px;
    font-weight: 300;
    color: #ababab;
  }
`;
