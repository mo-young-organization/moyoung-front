import { styled } from 'styled-components';

const PostPersonnelBox = ({ text, arrayMap, register, name }) => {
  return (
    <Container>
      <label>{text}</label>
      <ContentUl>
        {arrayMap.map(el => (
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

>label {
    font-size: 16px;
    font-weight: 500px;
}
`
