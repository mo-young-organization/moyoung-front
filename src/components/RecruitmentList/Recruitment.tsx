import { useEffect, useState } from 'react';
import Article from './Article';
import Pagination from './Pagination';
import { styled } from 'styled-components';
import Search from '../MovieSearch/Search';
import RecruFilterModal from './Modal/RecruFilterModal';
import RecPotal from './Modal/RecPotal';
import { useNavigate } from 'react-router-dom';
import { getRecruitList } from '../../api/api';
import { RecruitProps } from './recruitType';

const Recruitment = ({ dummyData }) => {
  const [curPage, setCurPage] = useState(1);
  const [recModalOn, setRecModalOn] = useState(false);

  const [recruitData, setRecruitData] = useState<RecruitProps>();
  // const { totalPages } = recruitData.pageInfo;

  useEffect(() => {
    const fetchGetRecruitData = async () => {
      const data = await getRecruitList(1);
      setRecruitData(data);
    };
    fetchGetRecruitData();
  }, []);

  const navigate = useNavigate();

  const filterOnAndCancelButtonHandler = () => {
    setRecModalOn(!recModalOn);
  };

  const createPostHandler = () => {
    navigate('/createpostrecruit');
  };

  return (
    <>
      <ContentSearchDiv>
        <Search text="영화 같이 볼 사람 찾기" />
      </ContentSearchDiv>
      <FilterBoxDiv>
        <button className="create-button" onClick={createPostHandler}>
          글쓰기
        </button>
        <button onClick={filterOnAndCancelButtonHandler}>2</button>
      </FilterBoxDiv>
      <DivPagination>
        <Pagination limit={5} setCurPage={setCurPage} curPage={curPage} totalPage={1} />
      </DivPagination>
      <UlArticleMaping>
        {/* {dummyData.map((el, idx) => ( */}
        {recruitData?.data.map((el, idx) => (
          <Article key={idx} data={el} />
        ))}
      </UlArticleMaping>
      <DivPagination>
        <Pagination limit={5} setCurPage={setCurPage} curPage={curPage} totalPage={1} />
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

  .create-button {
    width: 77px;
    border-radius: 4px;
    cursor: pointer;
  }
  > button {
    border: none;
    width: 28px;
    height: 28px;
    margin-left: 5px;
    cursor: pointer;
  }
`;
