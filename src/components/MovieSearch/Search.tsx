import { styled } from 'styled-components';
import { LiaSearchSolid } from 'react-icons/lia';
import { useState } from 'react';
import { movieSearchGet } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setCinemaNameStatus } from '../../store/reducers/cinemaName';
import { useNavigate } from 'react-router-dom';

interface TextProps {
  text?: string;
}

const Search = ({ text }: TextProps) => {
  const [movieTitle, setMovieTitle] = useState('');

  const movieTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(event.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonClickHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (movieTitle !== '') {
      console.log('get요청');
      const data = await movieSearchGet(movieTitle);

      // navigate에서 state로 데이터 연결 가능! => cinemalist페이지에선 useLocation으로 state값을 불러올 수 있다.
      navigate('/cinemalist', { state: data.data });

      // 전역 변수로 저장 => 영화 이름으로 검색후 리스트 페이지에서 사용
      // dispatch(setCinemaNameStatus(data.data));
    }
    setMovieTitle('');
  };

  return (
    <Container>
      <Title>{text ? <h1>{text}</h1> : <h1>내 주변 영화관 찾기</h1>}</Title>
      <Form id="searchinput" onSubmit={buttonClickHandler}>
        <SearchInput
          value={movieTitle}
          id="searchinput"
          type="text"
          placeholder="영화 제목을 검색해보세요."
          onChange={movieTitleHandler}
        />
        <SearchButton type="submit">
          <LiaSearchSolid />
        </SearchButton>
      </Form>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 550px;

  margin: 80px 0px 100px 0px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 60px;
  background-color: white;

  button:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 100%;
  height: 100%;
  border-radius: 60px;
  padding: 16px 40px;
  outline: none;

  border: none;
`;

const SearchButton = styled.button`
  position: relative;
  right: 0px;
  width: 80px;
  height: 100%;

  border: 0;
  border-radius: 60px;
  background-color: transparent;

  > svg {
    width: 40px;
    height: 40px;
  }
`;
