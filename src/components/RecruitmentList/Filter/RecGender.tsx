import { styled } from 'styled-components';

const RecGender = () => {
  const genderArr = [
    { gender: 'all', name: '전체' },
    { gender: 'man', name: '남자만' },
    { gender: 'woman', name: '여자만' },
  ];

  return (
    <Container className="content-gender">
      <label htmlFor="gender" className="font">
        성별
      </label>
      <ul>
        {genderArr.map(data => (
          <li key={data.gender}>
            <input type="radio" id={data.gender} />
            <label htmlFor={data.gender} className="font-list">
              {data.name}
            </label>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RecGender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cbcbcb;

  > ul {
    display: flex;
    padding: 0px;
    list-style: none;

    margin-bottom: 28px;
  }
`;
