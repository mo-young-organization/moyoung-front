import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { ReduxType } from '../store/store';

import Recruitment from '../components/RecruitmentList/Recruitment';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../util/Cookie';

const RecruitmentListPage = () => {
  const dummyData = [
    {
      recruitingArticleId: 1,
      title: '새로운 제목이지롱',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 영화보러 가용',
      nicname: '김현우',
      province: '경기',
      city: '인천',
    },
    {
      recruitingArticleId: 1,
      title: '무한으로 즐겨요 명륜진사갈비',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '오펜하이머 보신분?',
      nicname: '김현우',
      province: '경기',
      city: '가평',
    },
    {
      recruitingArticleId: 1,
      title: '제 최애 영화는 위대한쇼맨 입니다.',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '남양주',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '잠실',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '여의도',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '여의도',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '여의도',
    },
    {
      recruitingArticleId: 1,
      title: '영화보고 고기 먹으러 가',
      nicname: '김현우',
      province: '경기',
      city: '강릉',
    },
  ];

  const navigate = useNavigate();
  const userStatus = getCookie('refreshToken');

  // 회원만 입장할 수 있도록 유효성 검사
  if (!userStatus) {
    return (
      <div>
        <h1>회원이 아닙니다.</h1>
        <button onClick={() => navigate('/login')}>로그인/회원가입하러 가기</button>
      </div>
    );

    navigate('/login');
  }

  return (
    <Container>
      <Recruitment dummyData={dummyData} />
    </Container>
  );
};

export default RecruitmentListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  justify-content: center;
`;
