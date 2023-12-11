import { useForm, SubmitHandler } from 'react-hook-form';
import { FilterFormValue } from '../../SignupCheck/FormType';
import Cinema from './Cinema';
import Time from './Time';
import Distance from './Distance';
import { styled } from 'styled-components';
import { useState } from 'react';

const Filter = ({ setLotte, setMega, setCgv, setDt }) => {
  const { register, handleSubmit, watch } = useForm<FilterFormValue>();

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

  const onSubmitHandler: SubmitHandler<FilterFormValue> = data => {
    // 영화관 조건문
    if (watch('cinema') === '메가박스') {
      setLotte(false);
      setCgv(false);
      setMega(true);
    } else if (watch('cinema') === '롯데시네마') {
      setLotte(true);
      setCgv(false);
      setMega(false);
    } else if (watch('cinema') === 'CGV') {
      setLotte(false);
      setCgv(true);
      setMega(false);
    }

    // // 영화 시간 조건문
    // if (watch('time') === '조조') {
    //   setEarly(true);
    // } else if (watch('time') !== '조조') {
    //   setEarly(false);
    // }

    distance(value);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
      <ContentDiv>
        <Cinema register={register} />
        {/* <Time register={register} /> */}
        <Distance setValue={setValue} value={value} />
      </ContentDiv>
      <ButtonDiv>
        <button>적용</button>
      </ButtonDiv>
    </ContainerForm>
  );
};

export default Filter;

const ContainerForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 0px 85px;

  width: 100%;
  height: 250px;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 100%;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  > button {
    border-radius: 4px;
    width: 100px;
    height: 30px;

    background-color: transparent;
    border-radius: 20;
    cursor: pointer;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    display: flex;
    align-items: end;
    width: 100%;
  }
`;
