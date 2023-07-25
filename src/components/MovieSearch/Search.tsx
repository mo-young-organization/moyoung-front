import { styled } from 'styled-components';
import { LiaSearchSolid } from 'react-icons/lia';
import { useState } from 'react';

const Search = () => {
  const [movieTitle, setMovieTitle] = useState('');

  const movieTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(event.target.value);
  };

  const buttonClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMovieTitle('');
    console.log(movieTitle);
  };

  return (
    <Container>
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
  height: 72px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  position: relative;

  button:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  border-radius: 60px;
  padding: 16px 40px;

  border: none;
`;

const SearchButton = styled.button`
  position: absolute;
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
