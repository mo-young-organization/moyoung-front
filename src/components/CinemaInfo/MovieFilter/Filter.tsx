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
      <Cinema register={register} />
      <Time register={register} />
      <DistanceDiv>
        <Distance register={register} />
        <MyLocation />
      </DistanceDiv>
    </ContainerForm>
  );
};

export default Filter;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 85px;

  width: 750px;
  height: 250px;
`;

const DistanceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
