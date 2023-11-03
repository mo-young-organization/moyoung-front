import { styled } from 'styled-components';
import { SignupProps } from './FormType';

const Age = ({ register, errors }: SignupProps) => {
  const ageArr = [
    { id: 'age10', age: '10대' },
    { id: 'age20', age: '20대' },
    { id: 'age30', age: '30대 이상' },
  ];

  return (
    <Container>
      <label htmlFor="age" className="font">
        나이대
      </label>
      <ul>
        {ageArr.map(data => (
          <li key={data.id}>
            <input type="radio" id={data.id} value={data.age} {...register('age', { required: '체크를 해주세요' })} />
            <label htmlFor={data.id}>{data.age}</label>
          </li>
        ))}
      </ul>
      {errors.age?.message ? <div>{errors.age?.message}</div> : <></>}
    </Container>
  );
};

export default Age;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    padding: 0px;
    list-style: none;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    > ul {
      flex-direction: column;
    }
  }
`;
