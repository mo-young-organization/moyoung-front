import { styled } from 'styled-components';
import Name from './Name';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <Container>
      <div className="member">
        <Name
          name="이세영"
          role="Front-end"
          email="dlsy031@gmail.com"
          link="https://github.com/LEE2302"
        >
          <BsGithub></BsGithub>
        </Name>
        <Name
          name="김현우"
          role="Front-end"
          email="khw786678@gmail.com"
          link="https://github.com/kimhw7"
        >
          <BsGithub></BsGithub>
        </Name>
        <Name
          name="송준상"
          role="Back-end"
          email="thdwns0331@gmail.com"
          link="https://github.com/DDunDDang"
        >
          <BsGithub></BsGithub>
        </Name>
        <Name name="최영아" role="Design" email="khancya@gmail.com" />
      </div>
      <div className="logo">로고</div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: #eaeaea;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;

  .member {
    margin-left: 100px;
  }

  .logo {
    margin: 80px 100px 0px 0px;
  }
`;
