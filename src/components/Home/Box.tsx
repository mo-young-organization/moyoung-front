import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GiTheater } from 'react-icons/gi';
import { PiUsersFour } from 'react-icons/pi';

const Box = () => {
  const navigate = useNavigate();

  const theaterHandler = () => {
    navigate('moviesearch');
    console.log('영화관 찾기');
  };

  const peoplelHandler = () => {
    navigate('recruitmentlist');
    console.log('사람 찾기');
  };

  return (
    <Container>
      <div className="box" onClick={theaterHandler}>
        <GiTheater />
        <div className="text">내 주변 영화관 찾기</div>
      </div>
      <div className="box" onClick={peoplelHandler}>
        <PiUsersFour />
        <div className="text">영화 같이 볼 사람 찾기</div>
      </div>
    </Container>
  );
};

export default Box;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 2;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--point-color);

    text-align: center;

    width: 465px;
    height: 440px;
    border-radius: 36px;
    margin: 40px;
    cursor: pointer;

    > svg {
      width: 172px;
      height: 140px;
      margin-bottom: 40px;
      color: var(--sub-color1);
    }

    .text {
      font-size: 32px;
      font-weight: 700;
      color: var(--sub-color1);
    }
  }
`;
