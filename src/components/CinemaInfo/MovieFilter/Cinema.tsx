import { FilterProps } from '../../SignupCheck/FormType';

const Cinema = ({ register }: FilterProps) => {
  const cinemaArr = [
    { id: 'cgv', cinema: 'CGV' },
    { id: 'mega', cinema: '메가박스' },
    { id: 'lotte', cinema: '롯데시네마' },
  ];

  return (
    <div>
      <label htmlFor="cinema">영화관</label>
      <ul>
        {cinemaArr.map(el => (
          <li key={el.id}>
            <input type="radio" id={el.id} {...register('cinema')} />
            <label htmlFor={el.id}>{el.cinema}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;
