import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <div className="member">
        <Name>이세영</Name>
        <Name>김현우</Name>
        <Name>송준상</Name>
        <Name>최영아</Name>
      </div>
      <div className="logo">로고</div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: green;

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

const Name = styled.div`
  margin-top: 10px;
`;
