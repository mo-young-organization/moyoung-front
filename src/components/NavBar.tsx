import { styled } from 'styled-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate('/');
  };

  const loginClickHandler = () => {
    navigate('/login');
    console.log('로그인 클릭');
  };

  return (
    <Container>
      <Content>
        <div className="logo" onClick={logoClickHandler}>
          로고
        </div>
        <UserDiv>
          <div className="login" onClick={loginClickHandler}>
            <PermIdentityOutlinedIcon />
            로그인
          </div>
        </UserDiv>
      </Content>
    </Container>
  );
};

export default NavBar;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;

  .logo {
    background-color: blue;

    width: 100px;
    height: 50px;

    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1200px;
`;

const UserDiv = styled.div`
  display: flex;
  margin: 0px;

  .login {
    display: flex;
    align-items: center;

    cursor: pointer;
  }
`;
