import { styled } from 'styled-components';

const LeftTitle = () => {
  return (
    <Container>
      <div>로고</div>
      <div>
        <h1>
          안녕하세요
          <br />
          주변 영화관 시간표 검색 플랫폼
          <br />
          모영입니다.
        </h1>
      </div>
    </Container>
  );
};

export default LeftTitle;

const Container = styled.div`
  width: 430px;
  height: 376px;
`;
