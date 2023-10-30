import { styled } from 'styled-components';
import NavyLogo from '../../assets/img/모영남색로고.png';

const Title = () => {
  return (
    <Container>
      <div className="main-title">
        <span>내 주변에 있는 영화관만 모아서 한번에</span>
      </div>
      <div>
        <img className="main-logo" src={NavyLogo} alt="로고 이미지" />
      </div>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  flex-grow: 1;

  .main-title {
    font-size: 36px;
    font-weight: 700;
    color: var(--sub-color2);
  }

  .main-logo {
    width: 460px;
    height: 115px;
    margin-bottom: 30px;
  }
`;
