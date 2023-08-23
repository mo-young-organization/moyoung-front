import { FilterProps } from '../../SignupCheck/FormType';

const Time = ({ register }: FilterProps) => {
  const timeArr = [
    { id: '조조', time: '조조' },
    { id: '13시 이후', time: '13시 이후' },
    { id: '19시 이후', time: '19시 이후' },
    { id: '심야', time: '심야' },
  ];

  return (
    <div>
      <label>시간</label>
      <ul>
        {timeArr.map(el => (
          <li>
            <input type="radio" id={el.id} {...register('time')} />
            <label htmlFor={el.id}>{el.time}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Time;
