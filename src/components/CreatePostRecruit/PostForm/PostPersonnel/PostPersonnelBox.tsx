import { styled } from 'styled-components';

interface Props {
  text: string;
  arrayMap?: {
    title: string;
    content: string;
  }[];
  register: any;
  name: string;
}

const PostPersonnelBox = ({ text, arrayMap, register, name }: Props) => {
  return (
    <Container>
      <label>{text}</label>
      <ContentUl>
        {name === 'age'
          ? // 만약 수정이 생기면 리액트 훅폼 함수옵션으로 함수 만들어서 해야될듯?
            arrayMap.map(el => (
              <MapLi key={el.title}>
                <input type="radio" id={el.title} value={el.content} {...register(name, { required: true })} />
                <label htmlFor={el.title}>{el.content}</label>
              </MapLi>
            ))
          : arrayMap.map(el => (
              <MapLi key={el.title}>
                <input type="radio" id={el.title} value={el.content} {...register(name, { required: true })} />
                <label htmlFor={el.title}>{el.content}</label>
              </MapLi>
            ))}
      </ContentUl>
    </Container>
  );
};

export default PostPersonnelBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 88px;
  > label {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const ContentUl = styled.ul`
  display: flex;
`;

const MapLi = styled.li`
  margin-right: 24px;

  > label {
    font-size: 16px;
    font-weight: 500px;
  }
`;
