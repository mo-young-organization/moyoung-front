import { styled } from 'styled-components';

const Explanation = () => {
  return (
    <Container>
      <Content>
        <span className="first">개봉</span>
        <span className="second">2023.06.21</span>
      </Content>
      <Content>
        <span className="first">개요</span>
        <span className="second">전체관람가, 139분</span>
      </Content>
      <Content>
        <span className="first">장르</span>
        <span className="second">애니메이션/액션/어드벤처</span>
      </Content>
    </Container>
  );
};

export default Explanation;

const Container = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
display: flex;

  .first {
    font-size: 16px;
    font-weight: 500;
    color: #a2a2a2;

    width: 64px;
    text-align: center;
    margin-right: 24px;
  }

  .second {
    font-size: 16px;
    font-weight: 500;
    color: #474747;
  }
`;
