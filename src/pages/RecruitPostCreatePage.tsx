import { styled } from 'styled-components';
import RecruitPostCreate from '../components/CreatePostRecruit/RecruitPostCreate';

const RecruitPostCreatePage = () => {
  return (
    <Container>
      <RecruitPostCreate />
    </Container>
  );
};

export default RecruitPostCreatePage;

const Container = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  width: 100%;
`;
