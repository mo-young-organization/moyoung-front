import { styled } from 'styled-components';
import Calendar from './Calendar';

const MovieFilter = () => {
  return (
    <Container>
      <div>
        <Calendar />
      </div>
      <div>필터</div>
    </Container>
  );
};

export default MovieFilter;

const Container = styled.div`
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
`;
