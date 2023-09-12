import { styled } from 'styled-components';
import FilterCinema from '../../Filter/FilterCinema';
import FilterTime from '../../Filter/FilterTime';
import FilterDistance from '../../Filter/FilterDistance';

const ModalFilter = ({ onClose }) => {
  return (
    <Background>
      <Content>
        <InFilterForm>
          <InFilterDiv>
            <div className="filter_font_div">필터</div>
            <InMidDiv>
              <FilterCinema />
              <FilterTime />
              <FilterDistance />
            </InMidDiv>
            <div className="filter_button_div">
              <button onClick={e => e.preventDefault()}>적용</button>
            </div>
          </InFilterDiv>
        </InFilterForm>
      </Content>
    </Background>
  );
};

export default ModalFilter;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 70px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

// ----Filter
const InFilterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: whitesmoke;

  width: 580px;
  height: 360px;
  border-radius: 12px;
`;

const InFilterDiv = styled.div`
  height: 320px;

  .filter_font_div {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  .filter_button_div {
    display: flex;
    justify-content: end;

    > button {
      border: 1px solid #c2c2c2;
      border-radius: 4px;
      background-color: transparent;
      width: 65px;
      height: 33px;

      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const InMidDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 200px;
  margin: 28px 0px;
`;
