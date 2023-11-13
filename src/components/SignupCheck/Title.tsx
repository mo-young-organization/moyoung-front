import { styled } from 'styled-components';

const Title = () => {
  return (
    <Container>
      <Font>
        환영합니다! <br />
        <span className="font-color">모영</span>에서 사용할 정보를 입력해주세요
      </Font>
      <div>로고</div>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 680px;
  height: 100px;

  margin-bottom: 8px;
  border-bottom: 1px solid #d9d9d9;
`;

const Font = styled.div`
  font-size: 34px;
  font-weight: 700;
  line-height: 38px;

  .font-color {
    color: #d9d9d9;
  }
`;
