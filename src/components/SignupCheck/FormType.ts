import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';

export interface FormValue {
  nick: string;
  gender: string;
  age: string;
}

export interface PropsForm {
  register: UseFormRegister<FormValue>;
  errors: FieldErrors<FormValue>;
  watch: UseFormWatch<FormValue>;
  trigger: any
}

export interface Props  {
  register: UseFormRegister<FormValue>;
}