import { styled } from 'styled-components';

const MyLocation = ({ resultLength, dt }) => {
  const distanceCal = dt => {
    const distance = +dt;
    if (distance === 1500) {
      return 1.5;
    } else if (distance === 3000) {
      return 3;
    } else if (distance === 4500) {
      return 4.5;
    } else if (distance === 6000) {
      return 6;
    }
  };

  return (
    <Container>
      <div className="my">
        <span className="my">검색반경: </span>
        <span className="location">{`${distanceCal(dt)}KM`}</span>
      </div>
      <div className="my">
        <span className="my">검색결과: </span>
        <span className="location">{`${resultLength}개`}</span>
      </div>
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

// 상태 1개가 트루 생기고
// map으로 돌려서 채팅방이 list생기고
// 각각 채팅방 id넘겨줘야 채팅 모달이 뜬다.

// 모달을 하위로 넣는게 아니고 밖으로 빼서 id를 얻으면 되는거니깐
// 버튼에 onClick함수를 연결해서 id값을 상태에 저장하고 그걸 프롭으로 내리면?
