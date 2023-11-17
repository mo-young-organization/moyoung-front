import { styled } from 'styled-components';

const Explanation = ({ data }) => {
  const releaseDate = release => {
    const year = release.slice(0, 4);
    const month = release.slice(4, 6);
    const day = release.slice(6, 8);

    return `${year}.${month}.${day}`;
  };

  return (
    <Container>
      <Content>
        <span className="first">개봉</span>
        <span className="second">{releaseDate(data.releaseDate)}</span>
      </Content>
      <Content>
        <span className="first">개요</span>
        <span className="second">
          {data.movieRating}, {data.showTm}분
        </span>
      </Content>
      <Content>
        <span className="first">장르</span>
        <span className="second">{data.genre}</span>
      </Content>
    </Container>
  );
};

export default Explanation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  margin: 5px 0px;

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

  @media all and (max-width: 1024px) {
    width: 520px;
    height: auto;

    .first {
      font-size: 14px;
      font-weight: 500;
      color: #a2a2a2;

      width: 80px;
      text-align: center;
      margin-right: 10px;
    }

    .second {
      font-size: 14px;
      font-weight: 500;
      color: #474747;

      width: 700px;
    }
  }
`;
