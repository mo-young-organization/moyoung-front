import { styled } from 'styled-components';
import Article from '../components/RecruitmentList/Article';
import Pagination from '../components/RecruitmentList/Pagination';
import { useState } from 'react';

const RecruitmentListPage = () => {
  const [curPage, setCurPage] = useState(1);
  const dummyData = [
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
      city: '인천',
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
      city: '가평',
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
      title: '영화보고 고기 먹으러 가용',
      nicname: '김현우',
      province: '경기',
      city: '강릉',
    },
  ];

  return (
    <Container>
      <DivPagination>
        <Pagination limit={5} setCurPage={setCurPage} curPage={curPage} totalPage={20} />
      </DivPagination>
      <UlArticleMaping>
        {dummyData.map((el, idx) => (
          <Article key={idx} data={el} />
        ))}
      </UlArticleMaping>
      <DivPagination>
        <Pagination limit={5} setCurPage={setCurPage} curPage={curPage} totalPage={20} />
      </DivPagination>
    </Container>
  );
};

export default RecruitmentListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1200px;
  height: 100%;
  /* background-color: orange; */

  display: flex;
  justify-content: center;
`;

const UlArticleMaping = styled.ul`
  width: 1032px;
  height: 100%;
  /* background-color: #d76a6a; */
  padding: 0px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 78px 24px;
`;

const DivPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  margin: 100px 0px;
`;
