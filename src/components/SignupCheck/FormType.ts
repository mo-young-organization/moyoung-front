import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';

export interface SignupFormValue {
  nick: string;
  gender: string;
  age: string;
}

export interface FilterFormValue {
  cinema: string;
  time: string;
  distance: string;
}

export interface PropsForm {
  register: UseFormRegister<SignupFormValue>;
  errors: FieldErrors<SignupFormValue>;
  watch: UseFormWatch<SignupFormValue>;
  trigger: any;
}

export interface SignupProps {
  register: UseFormRegister<SignupFormValue>;
}

export interface FilterProps {
  register: UseFormRegister<FilterFormValue>;
}
