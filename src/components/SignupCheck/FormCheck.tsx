import { styled } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import Nickname from './Nickname';
import Gender from './Gender';
import Age from './Age';
import { SignupFormValue } from './FormType';
import { useState } from 'react';
import { signupCheckPost } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserStatus } from '../../store/reducers/userStatus';

const FormCheck = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SignupFormValue>();


  const [중복확인, set중복확인] = useState(false);
  const [isNickOverlap, setIsNickOverlap] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler: SubmitHandler<SignupFormValue> = async data => {
    data.gender = String(data.gender === '남자' ? true : false);
    data.age = data.age[0];
    console.log(data);
    // await 안붙혀서 그런가?? => 회원정보 등록 api요청을 보내고 세션스토리지에 닉네임 저장후 네비게이터 이동 이걸 원한건데 왜 안될까
    // signupCheckPost(data).then(() => navigate('/'));
    await signupCheckPost(data).then(date => {
      dispatch(setUserStatus(date.data.user)), navigate('/');
    });
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
