import { styled } from 'styled-components';

import Recruitment from '../components/RecruitmentList/Recruitment';
import { useParams } from 'react-router-dom';

const RecruitmentListPage = () => {
  const params = useParams();
  console.log(params);

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
