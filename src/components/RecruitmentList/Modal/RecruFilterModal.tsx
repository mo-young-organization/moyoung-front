import { styled } from 'styled-components';
import RecGender from '../Filter/RecGender';
import RecAge from '../Filter/RecAge';
import RecSort from '../Filter/RecSort';
import RecDistance from '../Filter/RecDistance';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ListFilterForm } from '../../SignupCheck/FormType';
import { useState } from 'react';

const RecruFilterModal = ({ onClose, setGender, setTeenager, setTwenties, setThirties }) => {
  const { register, handleSubmit, watch } = useForm<ListFilterForm>();

  //필터에 아직 거리 추가 안됨
  // const [value, setValue] = useState<number[]>([0, 1]);

  // const distance = dt => {
  //   console.log(dt);
  //   if (dt[1] === 1) {
  //     setDt(1500);
  //   } else if (dt[1] === 2) {
  //     setDt(3000);
  //   } else if (dt[1] === 3) {
  //     setDt(4500);
  //   } else if (dt[1] === 4) {
  //     setDt(6000);
  //   }
  // };

  const onSubmitHandler: SubmitHandler<ListFilterForm> = data => {
    console.log(data);
    data.gender === '전체' ? (data.gender = '0') : data.gender === '남자만' ? (data.gender = '1') : (data.gender = '2');
    if (data.age === '10대') {
      setTeenager(true), setTwenties(false), setThirties(false);
    }
    if (data.age === '20대') {
      setTeenager(false), setTwenties(true), setThirties(false);
    }
    if (data.age === '30대') {
      setTeenager(false), setTwenties(false), setThirties(true);
    }
    setGender(data.gender);

    onClose();
    // distance(value);
  };

  return (
    <Background>
      <Content>
        <ContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
          <TopDiv>
            <span />
            <span>필터</span>
            <span role="cancellButton" onClick={onClose}>
              X
            </span>
          </TopDiv>
          <MidDiv>
            <RecSort register={register} />
            <RecGender register={register} />
            <RecAge register={register} />
            <RecDistance />
          </MidDiv>
          <ButtonDiv>
            <button>적용</button>
          </ButtonDiv>
        </ContainerForm>
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

const ContainerForm = styled.form`
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
    cursor: pointer;
    border: 2px solid #c2c2c2;
    border-radius: 4px;
    background-color: transparent;

    width: 73px;
    height: 100%;
  }
`;
