import { styled } from 'styled-components';
import { PropsCreatePost } from '../../../SignupCheck/FormType';
import PostPersonnelBox from './PostPersonnelBox';
import { useCallback, useState } from 'react';

const PostPersonnel = ({ register, checkedList, setCheckedList }: PropsCreatePost) => {
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

  const onChekedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList(prev => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter(el => el !== item));
      }
    },
    [checkedList],
  );

  const ageArr = ['20대', '30대 이상'];

  // 체크 박스로 중복 체크가 가능해야함 => 배열로 값이 나와야함.
  // 10대가 아니라면 10대 클릭 x 성인은 성인만 체크 가능 o
  // 동일하게 10대는 10대만 가능하고 o 성인 체크 x

  return (
    <Container>
      <div className="title_applicant">*모집 인원</div>
      <ContentPersonnel>
        <PostPersonnelBox text={'인원수'} arrayMap={peopleArr} register={register} name={'maxNum'} />
        <PostPersonnelBox text={'성별'} arrayMap={genderArr} register={register} name={'gender'} />
        <PostPersonnelBox
          text={'나이대'}
          arrayMapAge={ageArr}
          register={register}
          name={'ages'}
          onChekedItem={onChekedItem}
        />
      </ContentPersonnel>
      <div className="bottom_explanation">
        *중복 선택 가능
        <br />
        *10대는 10대 체크박스만 뜨며, 성인은 20대,30대 이상 체크박스 선택이 가능합니다.
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

    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    @media all and (max-width: 1024px) {
      font-size: 24px;
    }
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
