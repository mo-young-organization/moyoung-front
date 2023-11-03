import { useEffect, useState } from 'react';
import Article from './Article';
import Pagination from './Pagination';
import { styled } from 'styled-components';
import Search from '../MovieSearch/Search';
import RecruFilterModal from './Modal/RecruFilterModal';
import RecPotal from './Modal/RecPotal';
import { useNavigate } from 'react-router-dom';
import { getRecruitList, getRecruitListNoUser } from '../../api/api';
import { RecruitProps } from './recruitType';
import { getCookie } from '../../util/Cookie';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import NoSearchMovie from '../NoMovie/NoSearchMovie';

const Recruitment = ({ size }) => {
  const [curPage, setCurPage] = useState(1);
  const [recModalOn, setRecModalOn] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [gender, setGender] = useState('');
  const [teenager, setTeenager] = useState(true);
  const [twenties, setTwenties] = useState(true);
  const [thirties, setThirties] = useState(true);
  const [distance, setDistance] = useState(1500);
  //false가 최신순 true가 거리 가까운순
  const [sort, setSort] = useState(false);

  const [recruitData, setRecruitData] = useState<RecruitProps>();
  const totalPages = recruitData && recruitData?.pageInfo.totalPages;

  const refreshToken = getCookie('refreshToken');
  useEffect(() => {
    const fetchGetRecruitData = async () => {
      if (refreshToken) {
        const data = await getRecruitList(
          curPage,
          size,
          `&keyword=${keyword}`,
          `&gender=${gender}`,
          `&teenager=${teenager}`,
          `&twenties=${twenties}`,
          `&thirties=${thirties}`,
          `&distance=${distance}`,
          `&sort=${sort}`,
        );
        setRecruitData(data);
      } else {
        const data = await getRecruitListNoUser(curPage, `&keyword=${keyword}`, size);
        setRecruitData(data);
      }
    };
    fetchGetRecruitData();
  }, [curPage, keyword, gender, teenager, twenties, thirties, distance, sort, size]);

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
        <Search text="영화 같이 볼 사람 찾기" setKeyword={setKeyword} />
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
        <Pagination limit={5} setCurPage={setCurPage} curPage={curPage} totalPage={totalPages} />
      </DivPagination>
      {recruitData?.data.length ? (
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
        <Pagination limit={5} setCurPage={setCurPage} curPage={curPage} totalPage={totalPages} />
      </DivPagination>
      <RecPotal>
        {recModalOn && (
          <RecruFilterModal
            onClose={filterOnAndCancelButtonHandler}
            setGender={setGender}
            setTeenager={setTeenager}
            setTwenties={setTwenties}
            setThirties={setThirties}
            setDistance={setDistance}
            setSort={setSort}
          />
        )}
      </RecPotal>
    </>
  );
};

export default Recruitment;

const ContentSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--sub-color1);
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

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 78px 24px;
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

    background-color: var(--point-color);
  }

  .create-filter {
    background-color: transparent;

    > svg {
      color: var(--sub-color2);
    }
  }

  > button {
    border: none;
    height: 28px;
    margin-left: 5px;
    cursor: pointer;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
  }
`;
