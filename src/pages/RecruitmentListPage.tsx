import { styled } from 'styled-components';
import Article from '../components/RecruitmentList/Article';

const RecruitmentListPage = () => {
  const dummyData = [
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
  ];

  return (
    <Container>
      <Article data={dummyData} />
    </Container>
  );
};

export default RecruitmentListPage;

const Container = styled.div`
  width: 1200px;
  height: 100%;
  background-color: orange;
`;
