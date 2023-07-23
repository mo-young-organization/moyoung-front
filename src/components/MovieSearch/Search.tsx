import { styled } from 'styled-components';
import { LiaSearchSolid } from 'react-icons/lia';

const Search = () => {
  return (
    <Container>
      <Label id="searchinput">
        <SearchInput id="searchinput" type="text" placeholder="영화 제목을 검색해보세요" />
        <SearchButton>
          <LiaSearchSolid />
        </SearchButton>
      </Label>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 550px;
  height: 72px;
`;

const Label = styled.label`
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
