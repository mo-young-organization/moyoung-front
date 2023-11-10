import { styled } from 'styled-components';
import { PropsCreatePost } from '../../SignupCheck/FormType';

const PostTitle = ({ register, errors }: PropsCreatePost) => {
  return (
    <Container>
      <Title>
        <span className="post_title">*제목</span>
        <span className="explanation">*18자 이내로 작성</span>
      </Title>
      <InputDiv>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          {...register('title', {
            required: true,
            maxLength: {
              value: 18,
              message: '18자 이내로 작성해 주세요',
            },
          })}
        />
        {errors && <div className="error">{errors?.title?.message}</div>}
      </InputDiv>
    </Container>
  );
};

export default PostTitle;

const Container = styled.div`
  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
  }
`;

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

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    .post_title {
      font-size: 24px;
      font-weight: 700;
    }

    .explanation {
      color: #8b8b8b;
      font-size: 16px;
      font-weight: 300;
      margin-left: 24px;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    .post_title {
      font-size: 16px;
    }
    .explanation {
      font-size: 12px;
    }
  }
`;

const InputDiv = styled.div`
  width: 590px;
  height: 50px;

  .error {
    font-size: 12px;
    color: red;
  }

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

    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    @media all and (max-width: 1024px) {
      width: 510px;
    }

    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    @media all and (max-width: 767px) {
      width: 320px;
      height: 45px;
    }
  }
`;
