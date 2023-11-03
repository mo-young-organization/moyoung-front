import { styled } from 'styled-components';

const FilterTime = ({ register }) => {
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

export default FilterTime;

const Container = styled.div`
  display: flex;

  > label {
    width: 64px;
    font-size: 14px;
    font-weight: 700;
    padding-left: 5px;
  }
`;

const ContentUl = styled.ul`
  display: flex;
  list-style-type: none;

  font-size: 12px;
  font-weight: 500;

  > li {
    margin-right: 36px;
  }
`;
