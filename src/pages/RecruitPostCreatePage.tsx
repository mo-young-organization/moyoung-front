import { styled } from 'styled-components';
import RecruitPostCreate from '../components/CreatePostRecruit/RecruitPostCreate';
import { useNavigate } from 'react-router-dom';

const RecruitPostCreatePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="title" role="button" onClick={() => navigate('/recruitmentlist')}>
        영화 같이 볼 사람 모으기
      </div>
      <RecruitPostCreate />
    </Container>
  );
};

export default RecruitPostCreatePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--sub-color2);

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--sub-color1);
    color: var(--sub-color2);
    width: 100%;
    height: 260px;

    font-size: 40px;
    font-weight: 700;
    cursor: pointer;

    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    @media all and (max-width: 1024px) {
      font-size: 36px;
    }

    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    @media all and (max-width: 767px) {
      font-size: 28px;
    }
  }
`;
