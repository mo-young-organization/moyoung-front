import { useState } from 'react';
import Article from './Article';
import Pagination from './Pagination';
import { styled } from 'styled-components';
import Search from '../MovieSearch/Search';

const Recruitment = ({ dummyData }) => {
  const [curPage, setCurPage] = useState(1);

  return (
    <>
      <ContentSearchDiv>
        <Search text="영화 같이 볼 사람 찾기" />
      </ContentSearchDiv>
      <div>네모네모?</div>
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
    </>
  );
};

export default Recruitment;

const ContentSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  width: 100%;
  height: 350px;
`;

const UlArticleMaping = styled.ul`
  width: 1032px;
  height: 100%;
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
