import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

import useInterval from '../../util/useInterval';
import useWindowSizeCustom from '../../util/WindowSizeCustom';

type ImgProps = {
  $img?: string;
  $slideIndex?: number;
};

const Carousel = ({ carouselTotalData, setClickMovieName }) => {
  // 캐러셀 필요한 useState들
  // 현재 인덱스 확인하기 => 박스 한개에 나는 5개가 들어가니깐 한칸씩 움직인다고 했을때면 10 - 5
  const [slideIndex, setSlideIndex] = useState(10);
  // 인덱스가 몇개까지 일지 => 이걸로 마지막 판별 => 10 - 5 값인 5를 초깃값으로 설정
  const [totalIndex, setTotalIndex] = useState(10);
  // 마우스 오버,아웃 판단 스태이트 => 마우스 오버시 캐러셀 멈추기 아웃시 다시 실행
  const [carouselRunning, setCarouselRunning] = useState(true);

  // 현재 윈도우 크기 가져오기
  const windowWidth = useWindowSizeCustom().width;
  // 크기별로 토탈 인덱스 변경
  useEffect(() => {
    if (windowWidth > 1024) {
      setTotalIndex(15 - 5);
    }
    if (windowWidth < 1024 && windowWidth > 768) {
      setTotalIndex(15 - 3);
    }
    if (windowWidth < 767 && windowWidth > 360) {
      setTotalIndex(15 - 2);
    }
  }, [windowWidth]);

  // 이전 버튼
  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(10);
    }
  };

  // 다음 버튼
  const nextSlide = () => {
    if (totalIndex !== slideIndex) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  // 인터벌 hook
  useInterval(
    () => {
      if (slideIndex === totalIndex) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    },
    carouselRunning ? slideIndex === 0 ? 200 : 2000 : null,
  );

  return (
    <Content>
      <ButtonDiv onClick={prevSlide}>
        <button>
          <BsFillArrowLeftSquareFill />
        </button>
      </ButtonDiv>
      <ContentCarousel>
        {carouselTotalData.map((el, idx) => (
          <Slide key={idx} $slideIndex={slideIndex}>
            <MovieBox
              $img={el.thumbnailUrl}
              onClick={() => {
                setClickMovieName(el.name);
              }}
              onMouseOver={() => {
                setCarouselRunning(false);
              }}
              onMouseOut={() => {
                setCarouselRunning(true);
              }}
            >
              <span className="number">{el.rank}</span>
            </MovieBox>
            <MovieTitle>{el.name.length > 8 ? `${el.name.slice(0, 9)}...` : el.name}</MovieTitle>
          </Slide>
        ))}
      </ContentCarousel>
      <ButtonDiv onClick={nextSlide}>
        <button>
          <BsFillArrowRightSquareFill />
        </button>
      </ButtonDiv>
    </Content>
  );
};

export default Carousel;

const ContentCarousel = styled.ul`
  display: flex;
  list-style: none;
  overflow: hidden;
  width: 1032px;
`;

const Slide = styled.li<ImgProps>`
  /* 위치 이동 && 애니메이션 */
  transform: translateX(-${props => props.$slideIndex * 100}%);
  /* 슬라이드가 */
  transition: ${props =>
    props.$slideIndex === 0 ? '' : 'all 0.5s ease-in-out'};
`;

const MovieBox = styled.div<ImgProps>`
  display: flex;
  align-items: end;
  color: #e1e1e1;
  font-size: 24px;
  position: relative;

  width: 180px;
  height: 255px;
  margin: 10px;
  border-radius: 8px;

  background-image: url(${props => props.$img});
  background-size: 100%;

  cursor: pointer;

  .number {
    margin-left: 10px;
    font-size: 38px;
    text-shadow: 4px 6px 4px #000000;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 108px;
    height: 152px;
    margin: 5px;

    .number {
      font-size: 28px;
    }
  }
`;

const MovieTitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  text-align: center;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    font-size: 14px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 1032px;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
  }
`;

const ButtonDiv = styled.div`
  > button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;

    > svg {
      color: var(--main-color);
      background-color: var(--sub-color2);
    }
  }
`;
