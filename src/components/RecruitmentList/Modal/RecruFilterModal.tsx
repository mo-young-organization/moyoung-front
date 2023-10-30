import { styled } from 'styled-components';
import RecGender from '../Filter/RecGender';
import RecAge from '../Filter/RecAge';
import RecSort from '../Filter/RecSort';
import RecDistance from '../Filter/RecDistance';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ListFilterForm } from '../../SignupCheck/FormType';
import { useState } from 'react';

const RecruFilterModal = ({ onClose, setGender, setTeenager, setTwenties, setThirties, setDistance, setSort }) => {
  const { register, handleSubmit, watch } = useForm<ListFilterForm>();

  const [value, setValue] = useState<number[]>([0, 1]);

  const distance = dt => {
    console.log(dt);
    if (dt[1] === 1) {
      setDistance(1500);
    } else if (dt[1] === 2) {
      setDistance(3000);
    } else if (dt[1] === 3) {
      setDistance(4500);
    } else if (dt[1] === 4) {
      setDistance(6000);
    }
  };

  const onSubmitHandler: SubmitHandler<ListFilterForm> = data => {
    console.log(data);

    // 1 젠더필터
    if (data.gender) {
      data.gender === '전체'
        ? (data.gender = '0')
        : data.gender === '남자만'
        ? (data.gender = '1')
        : (data.gender = '2');

      setGender(data.gender);
    } else {
      setGender('');
    }

    // 2. 나이필터
    if (data.age) {
      if (data.age === '10대') {
        setTeenager(true), setTwenties(false), setThirties(false);
      }
      if (data.age === '20대') {
        setTeenager(false), setTwenties(true), setThirties(false);
      }
      if (data.age === '30대') {
        setTeenager(false), setTwenties(false), setThirties(true);
      }
    } else {
      setTeenager(true), setTwenties(true), setThirties(true);
    }

    // 3. 정렬필터
    if (data.alignment) {
      data.alignment === '가까운순' ? setSort(true) : setSort(false);
    } else {
      setSort(false);
    }

    // 4. 거리필터
    console.log(value[1]);
    if (value[1] !== 1) {
      distance(value);
    } else {
      distance([0, 1]);
    }

    // 그냥 거기 데이터가 없으면 기본값으로 설정해주면 되는거 아닌가?

    // if (data.gender && !data.age && !data.alignment && !data.distance) {
    //   console.log('젠더에만 데이터가 있다면 젠더만 데이터로 넘겨주고 나머지는 기본값으로 변경');
    //   setGender(data.gender);
    //   setTeenager(true), setTwenties(true), setThirties(true);
    //   setSort(false);
    //   setDistance(1500);
    // } else if (!data.gender && data.age && !data.alignment && !data.distance) {
    //   console.log('나이에만 데이터가 있다면 나이만 데이터로 넘겨주고 나머지는 기본값으로 변경');
    //   if (data.age === '10대') {
    //     setTeenager(true), setTwenties(false), setThirties(false);
    //   }
    //   if (data.age === '20대') {
    //     setTeenager(false), setTwenties(true), setThirties(false);
    //   }
    //   if (data.age === '30대') {
    //     setTeenager(false), setTwenties(false), setThirties(true);
    //   }
    //   setGender('');
    //   setSort(false);
    //   setDistance(1500);
    // } else if (!data.gender && !data.age && data.alignment && !data.distance) {
    //   console.log('정렬에만 데이터가 있다면 정렬만 데이터로 넘겨주고 나머지는 기본값으로 변경');
    //   // console.log('정렬에만 데이터가 있다면 정렬만 데이터로 넘겨주고 나머지는 기본값으로 변경');
    //   setGender('');
    //   setTeenager(true), setTwenties(true), setThirties(true);
    //   data.alignment === '가까운순' ? setSort(true) : setSort(false);
    //   setDistance(1500);
    // }

    onClose();
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
            <RecDistance setValue={setValue} value={value} />
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
