import { styled } from 'styled-components';

const FilterCinema = () => {
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
            <input type="radio" id={el.id} />
            <label htmlFor={el.id}>{el.cinema}</label>
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
    font-size: 20px;
    font-weight: 700;
  }
`;

const ContentUl = styled.ul`
  display: flex;
  list-style-type: none;

  width: 330px;
  font-size: 16px;
  font-weight: 500;

  > li {
    margin-right: 36px;
  }
`;
