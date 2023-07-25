import { styled } from 'styled-components';

const Title = () => {
  return (
    <Container>
      <div>
        <h4>웹사이트 소개글</h4>
      </div>
      <div>
        <h1>웹사이트 이름</h1>
      </div>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  flex-grow: 1;
`;
