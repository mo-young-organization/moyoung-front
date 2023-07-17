import { styled } from 'styled-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const NavBar = () => {

  const loginClickHandler = () => {
    console.log('로그인 클릭')
  }

  return (
    <Container>
        <div className="logo">로고</div>
        <div className="login" onClick={loginClickHandler}><PermIdentityOutlinedIcon />로그인</div>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;

  .logo {
    background-color: blue;
    margin-left: 100px;

    width: 100px;
    height: 50px;
  }

  .login {
    display: flex;
    align-items: center;
    background-color: yellow;
    margin-right: 100px;
  }
`;
