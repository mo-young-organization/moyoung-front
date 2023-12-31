import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const ModalCalendar = ({ setDate }) => {
  // 날짜 데이터
  const date = new Date();
  const todayWeak = date.getDay();
  const today = date.getDate() + 10 >= 20 ? date.getDate() : `0${date.getDate()}`;
  const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const [clickMonth, setClickMonth] = useState(month);
  const [clickDay, setClickDay] = useState(today);

  // 일수 가져오는 함수(1,2,3,4 ...)
  const getAlldate = (today: number, lastday: number) => {
    const dates = [];

    //초깃값 설정
    dates[0] = today[0] === '0' ? today[1] : today;
    // dates[0] = today;

    for (let i = 1; i <= 13; i++) {
      today++;
      //마지막 날보다 날짜가 클경우 today를 1로 초기화.
      if (today > lastday) {
        today = 1;
        dates.push(today);
      }
      //일반 경우 그냥 날짜 추가
      else {
        dates.push(today);
      }
    }

    return dates;
  };

  // // 요일 표시하는 함수
  const getAllweak = (todayWeak: number) => {
    const strWeak = ['일', '월', '화', '수', '목', '금', '토'];
    const weaklist = [];

    //첫번째 오늘 날짜 적용 = 초깃값 설정
    weaklist[0] = '오늘';

    for (let i = 1; i <= 13; i++) {
      todayWeak++;

      //6일 이상이면 0으로 초기화
      if (todayWeak > 6) {
        todayWeak = 0;
        weaklist[i] = strWeak[todayWeak];
        // 오늘이면 오늘 추가, 오늘 다음 내일 추가
        // 조건 0번째가 오늘이고 1번째가 내일이 아니라면 내일 추가
        // } else if (weaklist[0] === '오늘' && weaklist[1] !== '내일') {
        //   weaklist[i] = '내일';
        // 나머지 요일들 배열 추가
      } else {
        weaklist[i] = strWeak[todayWeak];
      }
    }

    weaklist[1] = '내일';
    return weaklist;
  };

  // 함수 리턴 값을 이용하여 함수에 값을 담아주기
  const CalendarDay = getAlldate(+today, lastday);
  const CalendarWeak = getAllweak(todayWeak);

  // 배열안 객체로 관리
  const [CalendarObject, setCalendarObject] = useState<{ weak: string; day: number }[]>([]);

  const getCalendar = () => {
    // 위에 유즈스태이트와 구분짓기위해 s르 붙힘
    const CalendarObjects = [];
    for (let i = 0; i <= 13; i++) {
      CalendarObjects.push({ weak: CalendarWeak[i], day: CalendarDay[i] });
    }
    setCalendarObject(CalendarObjects);
  };

  useEffect(() => {
    getCalendar();
  }, []);

  // 날짜 클릭시 데이터 값 가져와서 상태 올리기(get요청이 새로 들어간다)
  useEffect(() => {
    const clickDate = `${year}-${clickMonth}-${clickDay}`;

    setDate(clickDate);
  }, [clickDay]);

  // ***유즈ref 정리한번 하자!!!!****
  const WeakRefs = useRef<any>([]);

  const [curIdx, setCurIdx] = useState(0);
  const onClickHandler = (idx: number) => {
    setCurIdx(idx);
    //일단 몇월인지 계산하는 조건문인데 조금 이상하지만 1일날 다시 테스트해보자 일단 해결
    if (CalendarDay[0] === 1) {
      setClickDay(
        WeakRefs.current[idx]?.textContent.length !== 2
          ? '0' + WeakRefs.current[idx]?.textContent
          : WeakRefs.current[idx]?.textContent,
      );
      setClickMonth(month);
    } else if (WeakRefs.current[idx]?.textContent < today) {
      setClickDay(
        WeakRefs.current[idx]?.textContent.length !== 2
          ? '0' + WeakRefs.current[idx]?.textContent
          : WeakRefs.current[idx]?.textContent,
      );
      setClickMonth(month + 1);
    } else {
      setClickDay(
        WeakRefs.current[idx]?.textContent.length !== 2
          ? '0' + WeakRefs.current[idx]?.textContent
          : WeakRefs.current[idx]?.textContent,
      );
      setClickMonth(month);
    }
  };

  // 원하는 요일의 인데스들을 반환하는 함수
  const findWeekend = (day: string) => {
    const dayIndex = CalendarWeak.indexOf(day);
    if (dayIndex < CalendarWeak.length / 2) {
      return [dayIndex, dayIndex + 7];
    } else {
      return [dayIndex - 7, dayIndex];
    }
  };
  // 토, 일요일의 인덱스
  const findSat = findWeekend('토');
  const findSun = findWeekend('일');

  return (
    <ContainerUl>
      {CalendarObject.map((el, idx) => (
        <button key={idx} onClick={() => onClickHandler(idx)}>
          <ContentLi
            // 클릭시 active
            // 토, 일요일의 인덱스를 가져와서 현재 인덱스와 비교 후 맞다면 sat, sun classname 부여
            className={
              `${curIdx === idx ? 'active' : ''} ` +
              `${findSat.includes(idx) ? 'sat' : findSun.includes(idx) ? 'sun' : ''}`
            }
          >
            <div className="day" ref={el => (WeakRefs.current[idx] = el)}>
              {el.day}
            </div>
          </ContentLi>
        </button>
      ))}
    </ContainerUl>
  );
};

export default ModalCalendar;

const ContainerUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  width: 100%;
  height: 100%;

  > button {
    border: none;
    background-color: transparent;
  }

  // 달력 두줄 만들기 위해서 억지로 끼어맞췄는데 다른 방법이 있을거 같은데....
  > button:not(:nth-child(7), :nth-child(14)) {
    margin-right: 20px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    border-bottom: solid 2px #dcdcdc;
    height: 38px;

    // 달력 두줄 만들기 위해서 억지로 끼어맞췄는데 다른 방법이 있을거 같은데....
    > button:not(:nth-child(7), :nth-child(14)) {
      margin-right: 2px;
    }
  }
`;

const ContentLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 38px;
  cursor: pointer;

  &.sat {
    color: #0094ff;
  }

  &.sun {
    color: #ff0000;
  }

  &:hover {
    border-radius: 8px;
    background-color: #538dff;
    color: white;
  }

  &.active {
    border-radius: 8px;
    background-color: #538dff;
    color: white;
  }

  .day {
    font-weight: 700;
    font-size: 14px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 36px;
    height: 34px;

    .weak {
      display: none;
    }

    &:hover {
      border-radius: 4px;
    }

    &.active {
      border-radius: 4px;
    }
  }
`;
