import { styled } from 'styled-components';
import PostForm from './PostForm';

const RecruitPostCreate = () => {
  return (
    <Container>
      <div className="post_state">
        <div className="state_div">
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
  display: flex;
  flex-direction: column;
  width: 1200px;

  .post_state {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 170px;

    .state_div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 328px;
      height: 60px;
      border-radius: 40px;

      background-color: #f1f1f1;
    }
  }
`;
