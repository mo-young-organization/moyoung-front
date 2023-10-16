import { styled } from 'styled-components';

import Recruitment from '../components/RecruitmentList/Recruitment';
import { dummyData } from '../data/RecruitListDummy';

const RecruitmentListPage = () => {
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
  background-color: white;

  display: flex;
  justify-content: center;
`;
