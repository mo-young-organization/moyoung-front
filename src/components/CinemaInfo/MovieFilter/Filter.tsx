import { useForm, SubmitHandler } from 'react-hook-form';
import { FilterFormValue } from '../../SignupCheck/FormType';
import Cinema from './Cinema';
import Time from './Time';
import Distance from './Distance';

const Filter = () => {
  const { register, handleSubmit } = useForm<FilterFormValue>();

  const onSubmitHandler: SubmitHandler<FilterFormValue> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <Cinema register={register} />
        <Time register={register} />
        {/* <Distance register={register} /> */}
      </div>
    </form>
  );
};

export default Filter;
