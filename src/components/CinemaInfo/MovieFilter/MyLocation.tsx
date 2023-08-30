import { styled } from 'styled-components';

const MyLocation = () => {
  return (
    <Container>
      <div>
        <span className="my">내 위치 : </span>
        <span className="location">{`마포구 성산 1동`}</span>
      </div>
      <div className="my">{`검색결과 6개`}</div>
    </Container>
  );
};

export default MyLocation;

const Container = styled.div`
  width: 200px;

  .my {
    font-size: 14px;
    font-weight: 500;
    color: #3d3d3d;
  }

  .location {
    font-size: 14px;
    font-weight: 700;
  }
`;
