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
  margin: 22px 0px;
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
    padding: 12px 16px;
    margin: 12px 10px 0px 0px;
  }
`;
