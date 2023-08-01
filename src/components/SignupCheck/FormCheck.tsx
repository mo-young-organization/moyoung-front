import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import Nickname from './Nickname';
import Gender from './Gender';
import Age from './Age';
import { FormValue } from './FormType';


const FormCheck = () => {
  //닉네임 정규식
  // - 2자 이상 5자 이하, 영어 또는 숫자 또는 한글로 구성
  // * 특이사항 : 한글 초성 및 모음은 허가하지 않는다.
  const nickTest = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,5}$/;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data)
    console.log(errors)
  }

  return (
    <ContainerForm onSubmit={userFormHandler}>
      <div>
        <Nickname register={register} errors={errors} watch={watch}/>
        <Gender register={register} />
        <Age register={register} />
      </div>
      <div className="button-check">
        <button type="button" onClick={handleSubmit(onSubmitHandler)}>
          완료
        </button>
      </div>
    </ContainerForm>
  );
};

export default FormCheck;

const ContainerForm = styled.form`
  width: 680px;
  height: 355px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .button-check {
    height: 100%;

    display: flex;
    align-items: end;

    > button {
      background-color: #b8b8b8;
      color: #ffffff;
      width: 150px;
      height: 50px;

      border: none;
      border-radius: 12px;

      font-size: 20px;
      font-weight: 700;
    }
  }

  .font {
    font-size: 20px;
    font-weight: 700px;

    margin-bottom: 8px;
  }

  .content-gender {
    margin: 60px 0px;
  }
`;
