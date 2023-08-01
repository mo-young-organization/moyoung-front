import { styled } from 'styled-components';

const Age = ({ register }) => {
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
            <input type="radio" id={data.id} value={data.age} {...register('age')} />
            <label htmlFor={data.id}>{data.age}</label>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Age;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  >ul {
    display: flex;
    padding: 0px;
    list-style: none;
  }
`;