import { styled } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import Nickname from './Nickname';
import Gender from './Gender';
import Age from './Age';
import { SignupFormValue } from './FormType';
import { useState } from 'react';
import { signupCheckPost } from '../../api/api';

const FormCheck = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SignupFormValue>();

  const [중복확인, set중복확인] = useState(false);

  const onSubmitHandler: SubmitHandler<SignupFormValue> = data => {
    console.log('폼 체크');
    if (중복확인) {
      console.log('폼 api요청 보낸다');
    }

    data.gender = String(data.gender === '남자' ? true : false);
    data.age = data.age[0];
    console.log(data);
    // signupCheckPost(data);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <Nickname
          register={register}
          errors={errors}
          watch={watch}
          trigger={trigger}
          중복확인={중복확인}
          set중복확인={set중복확인}
        />
        <Gender register={register} errors={errors} />
        <Age register={register} errors={errors} />
      </div>
      <div className="button-check">
        <CompletButton type="submit">완료</CompletButton>
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
    :hover {
      background-color: green;
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

const CompletButton = styled.button`
  background-color: #b8b8b8;
  color: #ffffff;
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 12px;

  font-size: 20px;
  font-weight: 700;
`;
