import { styled } from 'styled-components';

import Recruitment from '../components/RecruitmentList/Recruitment';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';

const RecruitmentListPage = () => {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarColorStatus('navy'));
  }, []);

  return (
    <Container>
      {/* <Recruitment dummyData={dummyData} /> */}
      <Recruitment />
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
