import { styled } from 'styled-components';
import Calendar from './Calendar';
import Filter from './Filter';

const MovieFilter = ({ setDate, setLotte, setMega, setCgv, setDt }) => {
  return (
    <Container>
      <ContentCalendar>
        <Calendar setDate={setDate} />
      </ContentCalendar>
      <ContentFilter>
        <Filter  setLotte={setLotte} setMega={setMega} setCgv={setCgv} setDt={setDt} />
      </ContentFilter>
    </Container>
  );
};

export default MovieFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const ContentCalendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 15px 0px 21px 0px;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
    margin-bottom: 70px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
    margin-bottom: 50px;
  }
`;

const ContentFilter = styled.div`
  display: flex;
  align-items: center;

  width: 1200px;
  height: 360px;
  border: 2px solid #d3d3d3;
  border-radius: 8px;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    justify-content: center;
    width: 320px;
    height: auto;

    padding: 10px 5px;

    margin-bottom: 20px;
  }
`;
