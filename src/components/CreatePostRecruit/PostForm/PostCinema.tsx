import { styled } from 'styled-components';
import { PropsCreatePost } from '../../SignupCheck/FormType';
import { LiaSearchSolid } from 'react-icons/lia';

const PostCinema = ({ register }: PropsCreatePost) => {
  const movieSearchHandler = () => {
    console.log('영화 검색 버튼 클릭');
  };

  return (
    <Container>
      <div className="cinema_title">*영화 및 영화관 선택</div>
      <Content>
        <InputDiv>
          <input type="text" placeholder="영화 제목을 검색해주세요" {...register('cinema', { required: true })} />
        </InputDiv>
        <SearchButton type="button" onClick={movieSearchHandler}>
          <LiaSearchSolid />
        </SearchButton>
      </Content>
      <WhichMovieDiv>
        <span>어떤 영화를 볼까요?</span>
      </WhichMovieDiv>
    </Container>
  );
};

export default PostCinema;

const Container = styled.div`
  .cinema_title {
    font-size: 28px;
    font-weight: 700;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const InputDiv = styled.div`
  width: 505px;
  height: 50px;
  margin: 12px 0px;

  > input {
    width: 505px;
    height: 50px;

    border: none;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
    padding: 0px 100px 0px 28px;

    box-shadow: 0px 1px 2px 0px #00000040;
  }
`;

const WhichMovieDiv = styled.div`
  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 505px;
  height: 295px;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 700;
  color: #bbbbbb;
`;

const SearchButton = styled.button`
  position: relative;
  right: 85px;
  width: 80px;
  height: 100%;
  cursor: pointer;

  border: 0;
  border-radius: 8px;
  background-color: transparent;

  &:hover {
    background-color: red;
  }

  > svg {
    width: 40px;
    height: 40px;
  }
`;
