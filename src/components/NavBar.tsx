import { styled } from 'styled-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate('/');
  };

  const loginClickHandler = () => {
    console.log('로그인 클릭');
  };

  return (
    <Container>
      <div className="logo" onClick={logoClickHandler}>
        로고
      </div>
      <div className="login" onClick={loginClickHandler}>
        <PermIdentityOutlinedIcon />
        로그인
      </div>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  background-color: red;
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

    cursor: pointer;
  }

  .login {
    display: flex;
    align-items: center;
    background-color: yellow;
    margin-right: 100px;
  }
`;
