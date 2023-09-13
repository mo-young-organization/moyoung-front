import { styled } from 'styled-components';

const RecSort = () => {
  const timeArr = [
    { id: '최신등록순', time: '최신등록순' },
    { id: '가까운순', time: '가까운순' },
  ];

  return (
    <Container>
      <label className="font">정렬</label>
      <ContentUl>
        {timeArr.map((el, idx) => (
          <li key={idx}>
            <input type="radio" id={el.id} />
            <label htmlFor={el.id} className="font-list">
              {el.time}
            </label>
          </li>
        ))}
      </ContentUl>
    </Container>
  );
};

export default RecSort;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid #cbcbcb;
`;

const ContentUl = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style-type: none;

  margin-bottom: 28px;
  height: 75px;

  > li {
    margin-right: 36px;
  }
`;
