import { styled } from 'styled-components';

const TimeBox = ({ 상영정보 }) => {
  return (
    <ContentUl>
      {상영정보.map(el => (
        <li key={el.screenInfo}>
          <span className="theater">{el.screenInfo}</span>
          <div>
            {el.runningTimeList.map((el, idx) => (
              <button key={idx} className="time">
                {el.startTime.slice(11, 16)}
              </button>
            ))}
          </div>
        </li>
      ))}
    </ContentUl>
  );
};

export default TimeBox;

const ContentUl = styled.ul`
  display: flex;
  flex-direction: column;

  > li:first-child {
    margin-top: 0px;
  }
  > li {
    margin-top: 44px;
  }

  .theater {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .time {
    width: 100px;
    height: 52px;
    border-radius: 4px;
    border: 1px solid #b6b6b6;
    background-color: var(--point-color);
    padding: 12px 16px;
    margin: 12px 10px 0px 0px;

    font-size: 20px;
    font-weight: 500;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    .theater {
      font-size: 12px;
    }

    .time {
      width: 60px;
      height: 32px;
      padding: 7px 10px;
      margin: 12px 8px 0px 0px;

      font-size: 14px;
      font-weight: 500;
    }
  }
`;
