import { styled } from 'styled-components';

import Recruitment from '../components/RecruitmentList/Recruitment';

const RecruitmentListPage = () => {
  const dummyData = [
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '인천',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '가평',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '여의도',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '여의도',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '여의도',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '강릉',
    },
  ];

  return (
    <Container>
      <Recruitment dummyData={dummyData} />
    </Container>
  );
};

export default RecruitmentListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  justify-content: center;
`;
