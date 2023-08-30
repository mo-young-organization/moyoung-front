import { styled } from 'styled-components';
import PostForm from './PostForm';

const RecruitPostCreate = () => {
  return (
    <Container>
      <div>영화 같이 볼 사람 모으기</div>
      <div>
        <div>
          <span>작성중 ...</span>
          <span>닉네임 20대</span>
        </div>
      </div>
      <PostForm />
    </Container>
  );
};

export default RecruitPostCreate;

const Container = styled.div`
  width: 1200px;
  background-color: orange;
`;
