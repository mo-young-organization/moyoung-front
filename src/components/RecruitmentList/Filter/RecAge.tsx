import { styled } from 'styled-components';

const RecAge = () => {
  const ageArr = [
    { id: 'age10', age: '10대' },
    { id: 'age20', age: '20대' },
    { id: 'age30', age: '30대' },
  ];

  return (
    <Container>
      <label htmlFor="age" className="font">
        나이대
      </label>
      <ul>
        {ageArr.map(data => (
          <li key={data.id}>
            <input type="radio" id={data.id} value={data.age} />
            <label htmlFor={data.id} className="font-list">
              {data.age}
            </label>
          </li>
        ))}
      </ul>
      <div>
        *중복 선택 가능
        <br />
        *10대는 10대만,20대 이상은 20대 이상만 선택 가능합니다
      </div>
    </Container>
  );
};

export default RecAge;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cbcbcb;

  > ul {
    display: flex;
    padding: 0px;
    list-style: none;
  }

  > div {
    font-size: 14px;
    font-weight: 500;
    color: #ababab;
    margin-bottom: 28px;
  }
`;
