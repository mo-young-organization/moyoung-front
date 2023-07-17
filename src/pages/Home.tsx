import { styled } from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Title>
        <div>
          <h3>웹사이트 소개글</h3>
        </div>
        <div>
          <h1>웹사이트 이름</h1>
        </div>
      </Title>
      <Content>
        <div className='box'>내 주변 영화관 찾기</div>
        <div className='box'>영화 같이 볼 사람 찾기</div>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #EFEFEF;
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 950px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const Content = styled.div`
  background-color: #EFEFEF;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;

  .box{
    background-color: #CCCCCC;

    width: 465px;
    height: 440px;
    margin: 40px;
  }
`
