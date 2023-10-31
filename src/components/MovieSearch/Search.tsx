import { styled } from 'styled-components';
import { LiaSearchSolid } from 'react-icons/lia';
import { RiPinDistanceLine } from 'react-icons/ri';
import { useState } from 'react';
import { movieSearchGet } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import DistancePotal from './Modal/DistancePotal';
import DistanceModal from './Modal/DistanceModal';

interface TextProps {
  text?: string;
}

const Search = ({ text, setKeyword }: TextProps) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [modalOn, setModalOn] = useState(false);
  const [dt, setDt] = useState(1500);

  const movieTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(event.target.value);
  };

  const navigate = useNavigate();
  const buttonClickHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text) {
      setKeyword(movieTitle);
    } else {
      if (movieTitle !== '') {
        console.log('get요청');
        const data = await movieSearchGet(movieTitle, dt);
        console.log(data.data.length);
        if (data.data.length === 0) {
          navigate('/nomovie');
          return;
        }
        // navigate에서 state로 데이터 연결 가능! => cinemalist페이지에선 useLocation으로 state값을 불러올 수 있다.
        navigate('/cinemalist', { state: [data.data, dt] });

        // 전역 변수로 저장 => 영화 이름으로 검색후 리스트 페이지에서 사용
        // dispatch(setCinemaNameStatus(data.data));
      }
    }
    setMovieTitle('');
  };

  return (
    <Container>
      <Title>{text ? <h1 className="text-white">{text}</h1> : <h1>내 주변 영화관 찾기</h1>}</Title>
      <Form id="searchinput" onSubmit={buttonClickHandler}>
        {text ? (
          <SearchInput
            value={movieTitle}
            id="searchinput"
            type="text"
            placeholder="게시물을 검색해보세요."
            onChange={movieTitleHandler}
          />
        ) : (
          <SearchInput
            value={movieTitle}
            id="searchinput"
            type="text"
            placeholder="영화 제목을 검색해보세요."
            onChange={movieTitleHandler}
          />
        )}
        <ButtonDiv>
          <SearchButton type="button" className="distance" onClick={() => setModalOn(!modalOn)}>
            <RiPinDistanceLine color="#6f6f6f" />
          </SearchButton>
          <SearchButton type="submit">
            <LiaSearchSolid />
          </SearchButton>
        </ButtonDiv>
      </Form>
      <DistancePotal>
        {modalOn && <DistanceModal setDt={setDt} modalOn={modalOn} setModalOn={setModalOn} />}
      </DistancePotal>
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

  .text-white {
    color: var(--sub-color2);
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 60px;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 100%;
  height: 60px;
  border-radius: 60px;
  padding: 16px 40px;
  outline: none;

  border: none;
`;

const ButtonDiv = styled.div`
  position: relative;
  right: 0px;
  width: 120px;
  height: 100%;

  .distance {
    margin-right: 5px;
  }
`;

const SearchButton = styled.button`
  border: 0;
  border-radius: 60px;
  background-color: transparent;
  cursor: pointer;

  > svg {
    width: 40px;
    height: 40px;
  }
`;
