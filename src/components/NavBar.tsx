import { styled } from 'styled-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { BsChatLeftDots } from 'react-icons/bs';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCookie, removeCookie } from '../util/Cookie';
import { useSelector } from 'react-redux';
import { ReduxType } from '../store/store';
import { userDelete } from '../api/api';

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

  //로그아웃 버튼 이벤트
  const logoutHandler = () => {
    console.log('로그아웃이구만유');
    removeCookie('token', { path: '/' });
    removeCookie('refreshToken', { path: '/' });
    window.sessionStorage.clear();
    setIsLogin(false);
  };

  //회원 탈퇴 버튼 이벤트
  const userDeleteHandler = () => {
    const memberId = window.sessionStorage.getItem('memberId');
    userDelete(memberId);
    removeCookie('token', { path: '/' });
    removeCookie('refreshToken', { path: '/' });
    window.sessionStorage.clear();
    setIsLogin(false);
  };

  const dropDownMenuArr = [
    { key: '로그아웃', onClick: logoutHandler },
    { key: '회원탈퇴', onClick: userDeleteHandler },
  ];
  const displayName = window.sessionStorage.getItem('displayName');
  console.log(displayName);

  // string(문자열로)값으로 넘어온다
  // 왜 이걸로 하려고 했지?? 리프레쉬 토큰이 아니라?? => 상단바에 null이라는 닉네임으로 나왔기 때문이였따.
  // const userStatus = useSelector((state: ReduxType) => state.userStatus.value);

  const refreshToken = getCookie('refreshToken');

  useEffect(() => {
    // 이걸 유저여부로 파악하자 리프레쉬토큰이 아니라 ?? => 왜 리프레쉬 토큰을 안쓰려고 했을까?
    // 리덕스는 새로고침하면 초기화가 되는데... 흠..
    if (displayName !== 'null' && refreshToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [refreshToken]);

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
                <DropDownUl role="button" className={onClick ? 'drop-menu' : 'none'}>
                  {dropDownMenuArr.map(el => (
                    <li onClick={el.onClick} key={el.key}>
                      {el.key}
                    </li>
                  ))}
                </DropDownUl>
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

const DropDownUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
