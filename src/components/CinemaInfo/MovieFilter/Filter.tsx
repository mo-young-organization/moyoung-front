import { useForm, SubmitHandler } from 'react-hook-form';
import { FilterFormValue } from '../../SignupCheck/FormType';
import Cinema from './Cinema';
import Time from './Time';
import Distance from './Distance';
import { styled } from 'styled-components';
import MyLocation from './MyLocation';

const Filter = () => {
  const { register, handleSubmit } = useForm<FilterFormValue>();

  const onSubmitHandler: SubmitHandler<FilterFormValue> = data => {
    console.log(data);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
      <ContentDiv>
        <div>
          <Cinema register={register} />
          <Time register={register} />
          <Distance register={register} />
        </div>
        <div>
          <MyLocation />
        </div>
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
`;

const ContentDiv = styled.div`
  display: flex;

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 100px;

  > button {
    height: 30px;

    background-color: transparent;
    border-radius: 20;
    cursor: pointer;
  }
`;
