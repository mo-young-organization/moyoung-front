import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Box = () => {
  const navigate = useNavigate();

  const theaterHandler = () => {
    navigate('moviesearch');
    console.log('영화관 찾기');
  };

  const peoplelHandler = () => {
    console.log('사람 찾기');
  };

  return (
    <Container>
      <div className="box" onClick={theaterHandler}>
        내 주변 영화관 찾기
      </div>
      <div className="box" onClick={peoplelHandler}>
        영화 같이 볼 사람 찾기
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
    background-color: #cccccc;

    text-align: center;

    width: 465px;
    height: 440px;
    border-radius: 36px;
    margin: 40px;
    cursor: pointer;
  }
`;
