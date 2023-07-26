import { styled } from 'styled-components';
import Name from './Name';
import { BsGithub } from 'react-icons/bs';

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
        <div className="logo">로고</div>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: #eaeaea;
  
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
`;
