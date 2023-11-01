import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';

import Recruitment from '../components/RecruitmentList/Recruitment';
import useWindowSizeCustom from '../util/WindowSizeCustom';

const RecruitmentListPage = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSizeCustom();
  const [size, setSize] = useState(20);
  console.log(width);
  useEffect(() => {
    dispatch(navbarColorStatus('navy'));
    if (width > 1023) {
      setSize(20);
    } else {
      setSize(15);
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
