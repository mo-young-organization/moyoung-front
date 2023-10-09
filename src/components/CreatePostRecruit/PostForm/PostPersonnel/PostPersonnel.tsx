import { styled } from 'styled-components';
import { PropsCreatePost } from '../../../SignupCheck/FormType';
import PostPersonnelBox from './PostPersonnelBox';

const PostPersonnel = ({ register }: PropsCreatePost) => {
  const peopleArr = [
    { title: '2', content: '2' },
    { title: '3', content: '3' },
    { title: '4', content: '4' },
    { title: '5', content: '5' },
  ];
  const genderArr = [
    { title: '전체', content: '전체' },
    { title: '남자만', content: '남자만' },
    { title: '여자만', content: '여자만' },
  ];
  const ageArr = [
    { title: '10대', content: '10대' },
    { title: '20대', content: '20대' },
    { title: '30대 이상', content: '30대 이상' },
  ];

  return (
    <Container>
      <div className="title_applicant">*모집 인원</div>
      <ContentPersonnel>
        <PostPersonnelBox text={'인원수'} arrayMap={peopleArr} register={register} name={'maxNum'} />
        <PostPersonnelBox text={'성별'} arrayMap={genderArr} register={register} name={'gender'} />
        <PostPersonnelBox text={'나이대'} arrayMap={ageArr} register={register} name={'age'} />
      </ContentPersonnel>
      <div className="bottom_explanation">
        *중복 선택 가능
        <br />
        *10대는 10대만, 20대 이상은 20대 이상만 선택 가능합니다
      </div>
    </Container>
  );
};

export default PostPersonnel;

const Container = styled.div`
  .title_applicant {
    font-size: 28px;
    font-weight: 700;

    margin-bottom: 36px;
  }

  .bottom_explanation {
    font-size: 14px;
    font-weight: 500;
    color: #ababab;
  }
`;

const ContentPersonnel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
`;
