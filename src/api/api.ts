import { instance } from './create';

// 낙내암 중복 post요청
export const nickNameDuplicatePost = async req => {
  try {
    const data = await instance.post(`/displayname`, req);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
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

// 회원 탈퇴(임의)
export const userDelete = async memberId => {
  try {
    const data = await instance.delete(`/hi?id=${memberId}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
