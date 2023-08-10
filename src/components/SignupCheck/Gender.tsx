import { styled } from 'styled-components';
import { Props } from './FormType';

const Gender = ({ register }: Props) => {
  const genderArr = [
    { gender: 'man', name: '남자' },
    { gender: 'woman', name: '여자' },
  ];

  return (
    <Container className="content-gender">
      <label htmlFor="gender" className="font">
        성별
      </label>
      <ul>
        {genderArr.map(data => (
          <li key={data.gender}>
            <input type="radio" id={data.gender} {...register('gender', { required: true })} value={data.name} />
            <label htmlFor={data.gender}>{data.name}</label>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Gender;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    padding: 0px;
    list-style: none;
  }
`;
