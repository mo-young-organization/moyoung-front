import { styled } from 'styled-components';

const TimeBox = ({ 상영정보 }) => {
  // console.log(상영정보);
  return (
    <ContentLi>
      <span className="theater">{상영정보.상영관}</span>
      <div>
        {상영정보.상영시간.map((el, idx) => (
          <button key={idx} className="time">
            {el}
          </button>
        ))}
      </div>
    </ContentLi>
  );
};

export default TimeBox;

const ContentLi = styled.li`
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
