import { styled } from 'styled-components';
import NavyLogo from '../../assets/img/moyoungnabylogo.png';
import { useNavigate } from 'react-router-dom';

const LeftTitle = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <img className="logo" alt="로고 이미지" src={NavyLogo} onClick={() => navigate('/')} />
      </div>
      <div>
        <h1>
          안녕하세요
          <br />
          주변 영화관 시간표 검색 플랫폼
          <br />
          <span className="text">모영</span>입니다.
        </h1>
      </div>
    </Container>
  );
};

export default LeftTitle;

const Container = styled.div`
  width: 430px;
  height: 376px;

  .logo {
    cursor: pointer;
    width: 230px;
    height: 56px;
    margin-bottom: 30px;
  }

  .text {
    color: var(--main-color);
  }
`;
