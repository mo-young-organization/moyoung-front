import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';

import Recruitment from '../components/RecruitmentList/Recruitment';
import useWindowSizeCustom from '../util/WindowSizeCustom';

const RecruitmentListPage = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSizeCustom();

  const [size, setSize] = useState(0);
  useEffect(() => {
    dispatch(navbarColorStatus('navy'));

    console.log(width);
    // 넓이가 1023보다 크면 사이즈 20
    if (width > 1023) {
      setSize(20);
      // 넓이가
    } else if (width > 767) {
      setSize(15);
    } else {
      setSize(10);
    }
  }, [width]);

  return (
    <Container>
      {/* <Recruitment dummyData={dummyData} /> */}
      <Recruitment size={size} />
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
  background-color: var(--main-color);

  display: flex;
  justify-content: center;
`;
