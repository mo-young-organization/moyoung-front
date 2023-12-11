import styled from 'styled-components';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import SearchDistance from '../SearchDistance';
import { useEffect, useState } from 'react';

const DistanceModal = ({ modalOn, setModalOn, setDt }) => {
  const [value, setValue] = useState<number[]>([0, 1]);

  const distance = dt => {
    if (dt[1] === 1) {
      setDt(1500);
    } else if (dt[1] === 2) {
      setDt(3000);
    } else if (dt[1] === 3) {
      setDt(4500);
    } else if (dt[1] === 4) {
      setDt(6000);
    }
  };

  useEffect(() => {
    distance(value);
  }, [value]);

  return (
    <Background>
      <Content>
        <Box>
          <TitleBox>
            <span />
            <span>거리</span>
            <span role="button" className="out-button" onClick={() => setModalOn(!modalOn)}>
              x
            </span>
          </TitleBox>
          <FilterBox>
            <div>
              <span className="icon-location">
                <LiaMapMarkerAltSolid />내 위치:
              </span>
              <span className="my-location">{' 마포구 성산 1동'}</span>
            </div>
            <div>
              <SearchDistance value={value} setValue={setValue} />
            </div>
          </FilterBox>
          <ButtonDiv>
            <button onClick={() => setModalOn(!modalOn)}>적용</button>
          </ButtonDiv>
        </Box>
      </Content>
    </Background>
  );
};

export default DistanceModal;

const Background = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  background-color: rgba(0, 0, 0, 0.2);

  .cancell-button {
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
    width: 580px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: white;
  border-radius: 20px;

  width: 520px;
  height: 300px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  > span {
    font-size: 16px;
    font-weight: 700;
  }
  .out-button {
    cursor: pointer;
  }
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  width: 90%;
  height: 125px;

  .icon-location {
    color: #3d3d3d;
    font-size: 14px;
  }
  .my-location {
    font-size: 14px;
    font-weight: 700;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 90%;
  justify-content: end;

  > button {
    width: 75px;
    height: 40px;

    border: none;
    border-radius: 4px;
    background-color: #538dff;
    color: white;

    cursor: pointer;
  }
`;
