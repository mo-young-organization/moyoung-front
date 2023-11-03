import { styled } from 'styled-components';
import { FilterProps } from '../../SignupCheck/FormType';

const Time = ({ register }: FilterProps) => {
  const timeArr = [
    { id: '조조', time: '조조' },
    { id: '13시 이후', time: '13시 이후' },
    { id: '19시 이후', time: '19시 이후' },
    { id: '심야', time: '심야' },
  ];

  return (
    <Container>
      <label>시간</label>
      <ContentUl>
        {timeArr.map((el, idx) => (
          <li key={idx}>
            <label htmlFor={el.id}>
              <input type="radio" id={el.id} value={el.time} {...register('time')} />
              {el.time}
            </label>
          </li>
        ))}
      </ContentUl>
    </Container>
  );
};

export default Time;

const Container = styled.div`
  display: flex;

  > label {
    width: 64px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const ContentUl = styled.ul`
  display: flex;
  list-style-type: none;

  > li {
    margin-right: 36px;
  }
`;
