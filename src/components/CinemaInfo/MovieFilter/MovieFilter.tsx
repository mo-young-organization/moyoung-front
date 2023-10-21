import { styled } from 'styled-components';
import Calendar from './Calendar';
import Filter from './Filter';

const MovieFilter = ({ setDate }) => {
  return (
    <Container>
      <ContentCalendar>
        <Calendar setDate={setDate} />
      </ContentCalendar>
      <ContentFilter>
        <Filter />
      </ContentFilter>
    </Container>
  );
};

export default MovieFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 480px;
`;

const ContentCalendar = styled.div`
  width: 1200px;

  margin: 15px 0px 21px 0px;
`;

const ContentFilter = styled.div`
  display: flex;
  align-items: center;

  width: 1200px;
  height: 360px;
  border: 2px solid #d3d3d3;
  border-radius: 8px;
`;
