import { styled } from 'styled-components';
import RecGender from '../Filter/RecGender';
import RecAge from '../Filter/RecAge';
import RecSort from '../Filter/RecSort';
import RecDistance from '../Filter/RecDistance';

const RecruFilterModal = ({ onClose }) => {
  return (
    <Background>
      <Content>
        <Container>
          <TopDiv>
            <span />
            <span>필터</span>
            <span role="cancellButton" onClick={onClose}>
              X
            </span>
          </TopDiv>
          <MidDiv>
            <RecSort />
            <RecGender />
            <RecAge />
            <RecDistance />
          </MidDiv>
          <ButtonDiv>
            <button>적용</button>
          </ButtonDiv>
        </Container>
      </Content>
    </Background>
  );
};

export default RecruFilterModal;

const Background = styled.div`
  height: 100%;
  width: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 565px;
  height: 850px;
  border-radius: 12px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  width: 500px;
  margin-top: 20px;

  font-size: 16px;
  font-weight: 700;
`;

const MidDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 452px;
  height: 640px;

  .font {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .font-list {
    font-size: 14px;
    font-weight: 500;

    margin-right: 70px;
  }
`;

const ButtonDiv = styled.div`
  margin-bottom: 50px;
  width: 452px;
  height: 41px;

  text-align: end;

  > button {
    border: 2px solid #c2c2c2;
    border-radius: 4px;
    background-color: transparent;

    width: 73px;
    height: 100%;
  }
`;
