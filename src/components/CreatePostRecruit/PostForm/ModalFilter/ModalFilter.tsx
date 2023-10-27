import { styled } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import FilterCinema from '../../Filter/FilterCinema';
import FilterTime from '../../Filter/FilterTime';
import FilterDistance from '../../Filter/FilterDistance';
import { FilterFormValue } from '../../../SignupCheck/FormType';
import { useState } from 'react';

const ModalFilter = ({ onClose, setEarly, setLotte, setMega, setCgv, setDt, clickHandler, id }) => {
  const { register, handleSubmit, watch } = useForm<FilterFormValue>();

  const [value, setValue] = useState<number[]>([0, 1]);

  const dt계산 = dt => {
    console.log(dt);
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

  const onSubmitHandler: SubmitHandler<FilterFormValue> = data => {
    console.log('hi');
    // 영화관 조건문
    if (watch('cinema') === '메가박스') {
      setLotte(false);
      setMega(true);
      setCgv(false);
    } else if (watch('cinema') === '롯데시네마') {
      setLotte(true);
      setMega(false);
      setCgv(false);
    } else if (watch('cinema') === 'CGV') {
      setLotte(false);
      setMega(false);
      setCgv(true);
    }

    // 영화 시간 조건문
    if (watch('time') === '조조') {
      setEarly(true);
    } else if (watch('time') !== '조조') {
      setEarly(false);
    }

    dt계산(value);
    onClose();
  };

  return (
    <Background>
      <Content>
        <InFilterForm onSubmit={handleSubmit(onSubmitHandler)}>
          <InFilterDiv>
            <div className="top-div">
              {/* 야매로 span3개로 함... */}
              <span />
              <span className="filter_font_div">필터</span>
              <span className="cancell-button" onClick={onClose}>
                X
              </span>
            </div>
            <InMidDiv>
              <FilterCinema register={register} />
              <FilterTime register={register} />
              <FilterDistance value={value} setValue={setValue} />
            </InMidDiv>
            <div className="filter_button_div">
              {/* <button onClick={onClose}>적용</button> */}
              <button>적용</button>
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

  .top-div {
    display: flex;
    justify-content: space-between;
  }

  .filter_font_div {
    font-size: 16px;
    font-weight: 700;
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
      cursor: pointer;
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
