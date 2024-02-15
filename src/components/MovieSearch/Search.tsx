import { styled } from 'styled-components';
import { LiaSearchSolid } from 'react-icons/lia';
import { RiPinDistanceLine } from 'react-icons/ri';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { movieSearchGet } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import DistancePotal from './Modal/DistancePotal';
import DistanceModal from './Modal/DistanceModal';

import { useSelector } from 'react-redux';
import { ReduxType } from '../../store/store';

interface TextProps {
  text?: string;
  setKeyword?: Dispatch<SetStateAction<string>>;
  clickMovieName?: string;
}

const Search = ({ text, setKeyword, clickMovieName }: TextProps) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [modalOn, setModalOn] = useState(false);
  const [dt, setDt] = useState(1500);
  const movieNameRef = useRef(null);

  const navigate = useNavigate();

  // 가로: 위도-latitude-Y값 , 세로: 경도-longitude-X값
  const { mylocationX, mylocationY } = useSelector((state: ReduxType) => state.myLocation.location.value);
  console.log(mylocationX);

  // 검색 버튼 이벤트 핸들러
  const buttonClickHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const movieName = movieNameRef.current.value;

    // text를 통해 영화관 찾기 input(검색)인지 게시글 input(검색)인지 구별
    if (text) {
      setKeyword(movieName);
    } else {
      if (movieName !== '') {
        const data = await movieSearchGet(mylocationY, mylocationX, movieName, dt);

        if (data.data.length === 0) {
          navigate('/nomovie');
          return;
        }
        // navigate에서 state로 데이터 연결 가능! => cinemalist페이지에선 useLocation으로 state값을 불러올 수 있다.
        navigate('/cinemalist', { state: [data.data, dt] });
      }
    }
    setMovieTitle('');
  };

  // 영화 순위 포스터 클릭시 실행 될 hook
  useEffect(() => {
    setMovieTitle(clickMovieName);
    const carouselClickHandler = async () => {
      if (movieTitle !== undefined && movieTitle !== '') {
        const data = await movieSearchGet(mylocationY, mylocationX, movieTitle, dt);

        if (data.data.length === 0) {
          navigate('/nomovie');
          return;
        }
        // navigate에서 state로 데이터 연결 가능! => cinemalist페이지에선 useLocation으로 state값을 불러올 수 있다.
        navigate('/cinemalist', { state: [data.data, dt] });
      }
    };

    carouselClickHandler();
  }, [clickMovieName, movieTitle]);

  return (
    <Container>
      <Title>
        {text ? (
          <div className="text-white">{text}</div>
        ) : (
          <div
            onClick={() => {
              navigate('/moviesearch');
            }}
          >
            내 주변 영화관 찾기
          </div>
        )}
      </Title>
      <Form id="searchinput" onSubmit={buttonClickHandler}>
        {text ? (
          <SearchInput
            defaultValue={movieTitle}
            id="searchinput"
            type="text"
            placeholder="게시물을 검색해보세요."
            ref={movieNameRef}
          />
        ) : (
          <SearchInput
            defaultValue={movieTitle}
            id="searchinput"
            type="text"
            placeholder="영화 제목을 검색해보세요."
            ref={movieNameRef}
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

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  font-size: 40px;
  font-weight: 700;

  cursor: pointer;

  .text-white {
    color: var(--sub-color2);
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 60px;
  background-color: white;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
    height: 52px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 100%;
  height: 60px;
  border-radius: 60px;
  padding: 16px 40px;
  outline: none;

  border: none;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
    height: 52px;
  }
`;

const ButtonDiv = styled.div`
  position: relative;
  right: 0px;
  width: 120px;
  height: 100%;

  .distance {
    margin-right: 5px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    top: 10px;
    right: 5px;
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

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    > svg {
      width: 32px;
      height: 32px;
    }
  }
`;
