import { instance } from './create';
import axios from 'axios';
import type { TMovieTopFive } from '../components/MovieSearch/MovieTopFive';

// 낙내암 중복 post요청
export const nickNameDuplicatePost = async req => {
  try {
    const data = await instance.post(`/displayname`, req);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

// 회원 정보 등록(signupCheck) post요청
export const signupCheckPost = async req => {
  try {
    const data = await instance.post(`/info`, req);
    console.log(data);

    window.sessionStorage.setItem('displayName', data.data.displayName);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 회원 탈퇴(임의) delete요청
export const userDelete = async memberId => {
  try {
    const data = await instance.delete(`/hi?id=${memberId}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 영화 검색 get요청
export const movieSearchGet = async movieName => {
  try {
    const data = await instance.get(`/movie?movieName=${movieName}&page=1`, {
      headers: {
        Accept: 'application/json',
        'ngrok-skip-browser-warning': 60420,
      },
    });
    console.log(data);
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};

// 영화 탑 순위 5개 get요청
export const getMovieTopFive = async () => {
  try {
    const data = await instance.get(`movie/rank`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// 모집글 불러오기 get요청
export const getRecruitList = async (page: number) => {
  try {
    const data = await instance.get(`recruit?page=${page}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// 모집글 삭제 delete 요청
export const deleteRecruit = async (recruitId: string) => {
  try {
    await instance.delete(`recruit/${recruitId}`);
  } catch (error) {
    console.log(error);
  }
};

// 모집글 수정 patch 요청
export const patchRecruit = async req => {
  try {
    await instance.patch(`recruit/${1}`, req);
  } catch (error) {
    console.log(error);
  }
};
