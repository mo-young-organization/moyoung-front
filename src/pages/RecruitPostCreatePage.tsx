import { styled } from 'styled-components';
import RecruitPostCreate from '../components/CreatePostRecruit/RecruitPostCreate';

const RecruitPostCreatePage = () => {
  return (
    <Container>
      <div className="title">영화 같이 볼 사람 모으기</div>
      <RecruitPostCreate />
    </Container>
  );
};

export default RecruitPostCreatePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #efefef;
    width: 100%;
    height: 260px;

    font-size: 40px;
    font-weight: 700;
  }
`;
