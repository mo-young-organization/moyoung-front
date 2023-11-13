import PostCinema from './PostForm/PostCinema';
import PostPersonnel from './PostForm/PostPersonnel/PostPersonnel';
import PostTitle from './PostForm/PostTitle';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreatePormProps } from '../SignupCheck/FormType';
import { styled } from 'styled-components';
import { postRecruitList } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RunningIdProps } from './PostForm/Modal/type';

const PostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreatePormProps>();

  const navigate = useNavigate();
  const [runningTimeData, setRunningTimeData] = useState<RunningIdProps>();
  console.log(runningTimeData);

  // 나이 중복 체크(input checkbox) 리스트
  const [checkedList, setCheckedList] = useState([]);

  const onSubmitHandler: SubmitHandler<CreatePormProps> = async data => {
    data.gender = String(data.gender === '전체' ? 1 : data.gender === '남자만' ? 2 : 3);
    data.age = data.age[0];

    // 객체 분해 할당으로 cinema제외하고 값을 불러옴으로 원하는 값을 빼내올 수 있고 반대로 req에는 cinema가 삭제되어 복사된다.
    const { cinema, ...req } = data;
    console.log(cinema);
    console.log((req.runningTimeId = runningTimeData && String(runningTimeData.runningTimeId)));
    console.log(req.runningTimeId);
    // post 요청
    if (req.age && req.gender && req.maxNum && req.runningTimeId && req.title) {
      const postData = await postRecruitList(req);
      if (postData.status === 200) {
        navigate('/recruitmentlist');
      } else if (postData.response.status === 404) {
        alert('영화를 선택해주세요.');
      }
    }
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
      <Content>
        <PostTitle register={register} errors={errors} />
        <PostCinema
          register={register}
          watch={watch}
          runningTimeData={runningTimeData}
          setRunningTimeData={setRunningTimeData}
        />
        <PostPersonnel register={register} />
      </Content>
      <ButtonDiv>
        <button type="submit">등록하기</button>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 1340px;
  margin: 67px 0px 0px 85px;

  ul {
    list-style: none;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    margin: 0px;
  }
`;

const ButtonDiv = styled.div`
  /* background-color: red; */

  display: flex;
  justify-content: end;
  height: 55px;
  margin: 100px 83px 115px 0px;

  > button {
    cursor: pointer;
    width: 150px;
    border: none;
    border-radius: 6px;
    background-color: var(--main-color);
    color: white;

    font-size: 20px;
    font-weight: 700;
  }
`;
