import { styled } from 'styled-components';

const FilterCinema = ({ register }) => {
  const cinemaArr = [
    { id: 'cgv', cinema: 'CGV' },
    { id: 'mega', cinema: '메가박스' },
    { id: 'lotte', cinema: '롯데시네마' },
  ];

  return (
    <Container>
      <label htmlFor="cinema">영화관</label>
      <ContentUl>
        {cinemaArr.map(el => (
          <li key={el.id}>
            <label htmlFor={el.id}>
              <input type="radio" id={el.id} value={el.cinema} {...register('cinema')} />
              {el.cinema}
            </label>
          </li>
        ))}
      </ContentUl>
    </Container>
  );
};

export default FilterCinema;

const Container = styled.div`
  display: flex;

  > label {
    width: 64px;
    font-size: 14px;
    font-weight: 700;
    padding-left: 5px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentUl = styled.ul`
  display: flex;
  list-style-type: none;

  width: 330px;
  font-size: 12px;
  font-weight: 500;

  input {
    margin: 0px;
    font-size: 12px;
  }
  > li {
    margin-right: 36px;
  }
`;
