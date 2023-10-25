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
import { getCookie } from '../../util/Cookie';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import NoSearchMovie from '../NoMovie/NoSearchMovie';

const Recruitment = () => {
  const [curPage, setCurPage] = useState(1);
  const [recModalOn, setRecModalOn] = useState(false);

  const [recruitData, setRecruitData] = useState<RecruitProps>();

  useEffect(() => {
    const fetchGetRecruitData = async () => {
      const data = await getRecruitList(1);
      setRecruitData(data);
    };
    fetchGetRecruitData();
  }, []);

  const navigate = useNavigate();
  const userStatus = getCookie('refreshToken');

  const filterOnAndCancelButtonHandler = () => {
    if (!userStatus) {
      alert('회원만 사용이 가능합니다.');
      navigate('/login');
    } else {
      setRecModalOn(!recModalOn);
    }
  };

  const createPostHandler = () => {
    if (!userStatus) {
      alert('회원만 사용이 가능합니다.');
      navigate('/login');
    } else {
      navigate('/createpostrecruit');
    }
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
        <button className="create-filter" onClick={filterOnAndCancelButtonHandler}>
          <HiOutlineAdjustmentsHorizontal size="30" />
        </button>
      </FilterBoxDiv>
      <DivPagination>
        <Pagination limit={5} setCurPage={setCurPage} curPage={curPage} totalPage={1} />
      </DivPagination>
      {/* 이게 뭔 오류지? */}
      {recruitData?.data ? (
        <UlArticleMaping>
          {recruitData?.data.map((el, idx) => (
            <Article key={idx} data={el} />
          ))}
        </UlArticleMaping>
      ) : (
        <UlArticleMaping className="no-recruit">
          <NoSearchMovie text={'게시물이 없습니다.'} />
        </UlArticleMaping>
      )}
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

  &.no-recruit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const DivPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  margin: 100px 0px;
`;

const FilterBoxDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 40px;
  width: 1031px;

  .create-button {
    width: 77px;
    border-radius: 4px;
    cursor: pointer;
  }

  .create-filter {
    background-color: transparent;
  }

  > button {
    border: none;
    height: 28px;
    margin-left: 5px;
    cursor: pointer;
  }
`;
