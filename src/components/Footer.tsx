import { styled } from "styled-components";

const Footer = () => {
  return(
    <Container>
        <Name>이세영</Name>
        <Name>김현우</Name>
        <Name>송준상</Name>
        <Name>최영아</Name>
    </Container>
  )
};

export default Footer;

const Container = styled.footer`
    background-color: green;

    height: 200px;
`

const Name = styled.div`
    margin: 10px 0px 10px 0px;
`
