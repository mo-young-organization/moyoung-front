import { useState } from 'react';
import Article from './Article';
import Pagination from './Pagination';
import { styled } from 'styled-components';
import Search from '../MovieSearch/Search';
import RecruFilterModal from './Modal/RecruFilterModal';
import RecPotal from './Modal/RecPotal';

const Recruitment = ({ dummyData }) => {
  const [curPage, setCurPage] = useState(1);
  const [recModalOn, setRecModalOn] = useState(false);

  const filterOnAndCancelButtonHandler = () => {
    setRecModalOn(!recModalOn);
  };

  return (
    <>
      <ContentSearchDiv>
        <Search text="영화 같이 볼 사람 찾기" />
      </ContentSearchDiv>
      <FilterBoxDiv>
        <button>1</button>
        <button onClick={filterOnAndCancelButtonHandler}>2</button>
      </FilterBoxDiv>
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
      <RecPotal>{recModalOn && <RecruFilterModal onClose={filterOnAndCancelButtonHandler} />}</RecPotal>
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

const FilterBoxDiv = styled.div`
  margin-top: 40px;
  width: 1031px;
  text-align: end;

  > button {
    border: none;
    width: 28px;
    height: 28px;
    margin-left: 5px;
  }
`;
