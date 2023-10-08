import PostCinema from './PostForm/PostCinema';
import PostPersonnel from './PostForm/PostPersonnel/PostPersonnel';
import PostTitle from './PostForm/PostTitle';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreatePormProps } from '../SignupCheck/FormType';
import { styled } from 'styled-components';
import { postRecruitList } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreatePormProps>();

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<CreatePormProps> = async data => {
    data.gender = String(data.gender === '전체' ? 1 : data.gender === '남자만' ? 2 : 3);
    data.age = data.age[0];

    // 객체 분해 할당으로 cinema제외하고 값을 불러옴으로 원하는 값을 빼내올 수 있고 반대로 req에는 cinema가 삭제되어 복사된다.
    const { cinema, ...req } = data;
    console.log(cinema);
    console.log((req.runningTimeId = '1'));
    console.log(req);
    // post 요청
    const postData = await postRecruitList(req);
    if (postData.status === 200) {
      navigate('/recruitmentlist');
    }
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
      <Content>
        <PostTitle register={register} errors={errors} />
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
