import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';

// 회원가입시 체크
export interface SignupFormValue {
  nick: string;
  gender: string;
  age: string;
}

export interface SignupProps {
  register: UseFormRegister<SignupFormValue>;
}

export interface PropsForm {
  register: UseFormRegister<SignupFormValue>;
  errors: FieldErrors<SignupFormValue>;
  watch: UseFormWatch<SignupFormValue>;
  trigger: any;
}

// 필터 폼 제출
export interface FilterFormValue {
  cinema: string;
  time: string;
  distance: string;
}

export interface FilterProps {
  register: UseFormRegister<FilterFormValue>;
}

// 영화 같이 볼사람 모집글 작성
export interface CreatePormProps {
  title: string;
  cinema: string;
  people: string;
  gender: string;
  age: string;
}

export interface PropsCreatePost {
  register: UseFormRegister<CreatePormProps>;
  errors?: FieldErrors<CreatePormProps>;
  watch?: UseFormWatch<CreatePormProps>;
  trigger?: any;
}
