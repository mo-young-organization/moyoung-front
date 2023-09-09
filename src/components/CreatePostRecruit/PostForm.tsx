import PostCinema from './PostForm/PostCinema';
import PostPersonnel from './PostForm/PostPersonnel/PostPersonnel';
import PostTitle from './PostForm/PostTitle';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreatePormProps } from '../SignupCheck/FormType';
import { styled } from 'styled-components';

const PostForm = () => {
  const { register, handleSubmit, watch } = useForm<CreatePormProps>();

  const onSubmitHandler: SubmitHandler<CreatePormProps> = data => {
    console.log(data);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
      <Content>
        <PostTitle register={register} />
        <PostCinema register={register} />
        <PostPersonnel register={register} />
      </Content>
      <ButtonDiv>
        <button>등록하기</button>
      </ButtonDiv>
    </ContainerForm>
  );
};

export default PostForm;

const ContainerForm = styled.form`
  /* background-color: beige; */

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  /* background-color: aqua; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 1340px;
  margin: 67px 0px 0px 85px;

  ul {
    list-style: none;
  }
`;

const ButtonDiv = styled.div`
  /* background-color: red; */

  display: flex;
  justify-content: end;
  height: 55px;
  margin: 100px 83px 115px 0px;

  > button {
    width: 150px;
    border: none;
    border-radius: 6px;
    background-color: #9f9f9f;
    color: white;

    font-size: 20px;
    font-weight: 700;
  }
`;
