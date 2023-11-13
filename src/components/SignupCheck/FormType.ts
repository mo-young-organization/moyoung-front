import { Dispatch, SetStateAction } from 'react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { RunningIdProps } from '../CreatePostRecruit/PostForm/Modal/type';

// 회원가입시 체크
export interface SignupFormValue {
  displayName: string;
  gender: string;
  age: string;
}

export interface SignupProps {
  register: UseFormRegister<SignupFormValue>;
  errors: FieldErrors<SignupFormValue>;
}

export interface PropsForm {
  register: UseFormRegister<SignupFormValue>;
  errors: FieldErrors<SignupFormValue>;
  watch: UseFormWatch<SignupFormValue>;
  trigger: any;
  중복확인: any;
  set중복확인: any;
}

// 게시물 등록 필터 폼 제출
export interface FilterFormValue {
  cinema: string;
  time: string;
  distance: string;
}

// 게시물 리스트 페이지 필터 폼 제출
export interface ListFilterForm {
  alignment: string;
  gender: string;
  age: string;
  distance: string;
}

export interface FilterProps {
  register: UseFormRegister<FilterFormValue>;
}

// 영화 같이 볼사람 모집글 작성
export interface CreatePormProps {
  title: string;
  cinema: string;
  runningTimeId: string;
  maxNum: string;
  gender: string;
  age: string;
}

export interface PropsCreatePost {
  register: UseFormRegister<CreatePormProps>;
  errors?: FieldErrors<CreatePormProps>;
  watch?: UseFormWatch<CreatePormProps>;
  trigger?: any;
  runningTimeData?: {
    runningTimeId: number;
    startTime: string;
    endTime: string;
  };
  setRunningTimeData?: Dispatch<SetStateAction<RunningIdProps>>;
}
