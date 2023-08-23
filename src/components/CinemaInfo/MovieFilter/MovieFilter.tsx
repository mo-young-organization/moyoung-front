import { styled } from 'styled-components';
import Calendar from './Calendar';
import Filter from './Filter';

const MovieFilter = () => {
  return (
    <Container>
      <ContentCalendar>
        <Calendar />
      </ContentCalendar>
      <ContentFilter>
        <Filter />
      </ContentFilter>
    </Container>
  );
};

export default MovieFilter;

const Container = styled.div`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentCalendar = styled.div`
  width: 1200px;

  margin: 15px 0px 21px 0px;
`


const ContentFilter = styled.div`
  width: 1200px;
`