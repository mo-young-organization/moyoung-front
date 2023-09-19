import { styled } from 'styled-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { BsChatLeftDots } from 'react-icons/bs';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCookie, removeCookie } from '../util/Cookie';
import { useSelector } from 'react-redux';
import { ReduxType } from '../store/store';

const NavBar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [onClick, setOnClick] = useState(false);

  const logoClickHandler = () => {
    navigate('/');
  };

  const loginClickHandler = () => {
    navigate('/login');
    console.log('로그인 클릭');
  };

  const logoutHandler = () => {
    console.log('로그아웃이구만유');
    removeCookie('token', { path: '/' });
    removeCookie('refreshToken', { path: '/' });
    window.sessionStorage.clear();
    setIsLogin(false);
  };

  const dropDownMenuArr = [{ key: '로그아웃', onClick: logoutHandler }];
  const displayName = window.sessionStorage.getItem('displayName');
  // const refreshToken = getCookie('refreshToken');
  const userStatus = useSelector((state: ReduxType) => state.userStatus.value);
  console.log(userStatus);

  useEffect(() => {
    // 이걸 유저여부로 파악하자 리프레쉬토큰이 아니라
    if (userStatus) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [userStatus]);

  return (
    <Container>
      <Content>
        <div className="logo" onClick={logoClickHandler}>
          로고
        </div>
        <UserDiv>
          {isLogin ? (
            <LoginSuccessDiv>
              <div role="button" className="login text">
                <BsChatLeftDots />
                참여중인 채팅
                <RiArrowDownSLine className="arrow" />
              </div>
              <div>
                <div role="button" className="login text" onClick={() => setOnClick(!onClick)}>
                  <PermIdentityOutlinedIcon />
                  {displayName}
                  {onClick ? <RiArrowUpSLine className="arrow" /> : <RiArrowDownSLine className="arrow" />}
                </div>
                <ul role="button" className={onClick ? 'drop-menu' : 'none'}>
                  {dropDownMenuArr.map(el => (
                    <li onClick={el.onClick} key={el.key}>
                      {el.key}
                    </li>
                  ))}
                </ul>
              </div>
            </LoginSuccessDiv>
          ) : (
            <div className="login text" onClick={loginClickHandler}>
              <PermIdentityOutlinedIcon />
              로그인
            </div>
          )}
        </UserDiv>
      </Content>
    </Container>
  );
};

export default NavBar;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: end;

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
  align-items: end;
  justify-content: space-between;

  width: 1200px;
  margin-bottom: 12px;
`;

const UserDiv = styled.div`
  display: flex;
  margin: 0px;

  .login {
    display: flex;
    align-items: center;

    cursor: pointer;

    > svg {
      margin-right: 5px;
      stroke-width: 1;
    }
  }

  .text {
    font-size: 16px;
    font-weight: 700;
  }
`;

const LoginSuccessDiv = styled.div`
  display: flex;
  justify-content: space-between;

  width: 250px;

  .arrow {
    color: #a3a3a3;
  }

  .drop-menu {
    background-color: #a3a3a3;
    list-style: none;

    position: absolute;
    height: 30px;
    width: 70px;
    top: 100px;
    z-index: 200;

    font-size: 16px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    > li {
      &:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 100%;
        cursor: pointer;
      }
    }
  }

  .none {
    display: none;
  }
`;
