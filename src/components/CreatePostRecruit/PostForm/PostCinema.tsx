import { styled } from 'styled-components';
import { PropsCreatePost } from '../../SignupCheck/FormType';
import { LiaSearchSolid } from 'react-icons/lia';

import CinemaPotal from './Modal/CinemaPotal';
import CinemaModal from './Modal/CinemaModal';
import { useState } from 'react';
import { movieSearchGet } from '../../../api/api';
import Ticket from './PostTicket';
import { useSelector } from 'react-redux';
import { ReduxType } from '../../../store/store';

const PostCinema = ({ register, watch, runningTimeData, setRunningTimeData }: PropsCreatePost) => {
  // 모달
  const [modalOn, setModalOn] = useState(false);
  // 영화 리스트를 위한 영화 데이터
  const [data, setData] = useState({});
  // 인풋 영화이름 밸류
  const [movieName, setMovieName] = useState('');
  // 유저가 선택한 영화 정보
  const [moviePickData, setMoviePickData] = useState();
  // 유저가 선택한 영화관 정보
  const [cinemaPickData, setCinemaPickData] = useState([]);

  // 주소 (위도,경도F)
  const { mylocationX, mylocationY } = useSelector((state: ReduxType) => state.myLocation.location.value);

  // 엔터 입력 시 전송되도록
  const pressEnterKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.shiftKey && e.key === 'Enter') {
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cinemaName = watch('cinema');
      if (cinemaName.length !== 0) {
        setMovieName(cinemaName);
        const data = await movieSearchGet(mylocationY, mylocationX, cinemaName, 3000);
        setData(data);
        setModalOn(!modalOn);
      } else {
        alert('영화를 입력해주세요.');
      }
    }
  };

  // 버튼(돋보기) 클릭 핸들러
  const movieSearchHandler = async () => {
    const cinemaName = watch('cinema');
    if (cinemaName.length !== 0) {
      setMovieName(cinemaName);
      const data = await movieSearchGet(mylocationY, mylocationX, cinemaName, 3000);
      setData(data);
      setModalOn(!modalOn);
    } else {
      alert('영화를 입력해주세요.');
    }
  };

  return (
    <Container>
      <label htmlFor="cinema" className="cinema_title">
        *영화 및 영화관 선택
      </label>
      <Content>
        <InputDiv>
          <input
            id="cinema"
            type="text"
            placeholder="영화 제목을 검색해주세요"
            onKeyPress={pressEnterKey}
            {...register('cinema', { required: '영화를 입력해 주세요.' })}
          />
        </InputDiv>
        <SearchButton type="button" onClick={movieSearchHandler}>
          <LiaSearchSolid />
        </SearchButton>
      </Content>
      <div>
        {!moviePickData ? (
          <WhichMovieDiv>
            <span>어떤 영화를 볼까요?</span>
          </WhichMovieDiv>
        ) : (
          <Ticket moviePickData={moviePickData} cinemaPickData={cinemaPickData} runningTimeData={runningTimeData} />
        )}
      </div>
      <CinemaPotal>
        {/* ****************************88티켓을 위해 상태 끌어올리기 해야함 **************************** */}
        {modalOn && (
          <CinemaModal
            register={register}
            onClose={movieSearchHandler}
            data={data}
            movieName={movieName}
            setMoviePickData={setMoviePickData}
            setCinemaPickData={setCinemaPickData}
            setRunningTimeData={setRunningTimeData}
          />
        )}
      </CinemaPotal>
    </Container>
  );
};

export default PostCinema;

const Container = styled.div`
  .cinema_title {
    font-size: 28px;
    font-weight: 700;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    .cinema_title {
      font-size: 24px;
    }
  }

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;

    .cinema_title {
      font-size: 16px;
    }
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

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    > input {
      padding: 0px 50px 0px 28px;
      width: 320px;
      height: 45px;
    }
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

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
    height: 190px;

    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  position: relative;
  right: 85px;
  width: 80px;
  height: 100%;
  cursor: pointer;
  z-index: 1;

  border: 0;
  border-radius: 8px;
  background-color: transparent;

  &:hover {
    background-color: red;
  }

  > svg {
    z-index: 1;
    width: 40px;
    height: 40px;
  }

  //브라우저 창 width가 767px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    right: 40px;

    > svg {
      z-index: 1;
      width: 24px;
      height: 24px;
    }
  }
`;
