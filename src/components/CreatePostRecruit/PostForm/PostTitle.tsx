import { styled } from 'styled-components';
import { PropsCreatePost } from '../../SignupCheck/FormType';

const PostTitle = ({ register }: PropsCreatePost) => {
  return (
    <div>
      <Title>
        <span className="post_title">*제목</span>
        <span className="explanation">*18자 이내로 작성</span>
      </Title>
      <InputDiv>
        <input type="text" placeholder="제목을 입력해주세요" {...register('title', { required: true })} />
      </InputDiv>
    </div>
  );
};

export default PostTitle;

// const Container = styled.div`
// `;

const Title = styled.div`
  .post_title {
    font-size: 28px;
    font-weight: 700;
  }

  .explanation {
    color: #8b8b8b;
    font-size: 20px;
    font-weight: 300;
    margin-left: 24px;
  }
`;

const InputDiv = styled.div`
  width: 590px;
  height: 50px;

  > input {
    width: 590px;
    height: 50px;

    border: none;
    border-radius: 8px;

    background-color: #f2f2f2;
    padding: 0px 28px;

    &:focus {
      outline: none;
    }
  }
`;
