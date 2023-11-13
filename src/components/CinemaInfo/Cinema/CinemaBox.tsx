//  import TimeBox from './TimeBox';
import { styled } from 'styled-components';
import TimeBox from './TimeBox';
import MEGA from '../../../assets/img/MEGA_logo.png';
import LOTTE from '../../../assets/img/LOTTE_logo.png';
import CGV from '../../../assets/img/CGV_logo.png';
import { CinemaDummy } from './data';
import MyLocation from '../MovieFilter/MyLocation';

const CinemaBox = ({ data, resultLength, dt }) => {
  return (
    <ContainerUl>
      <div>
        <MyLocation resultLength={resultLength} dt={dt} />
      </div>
      {data.map((el, idx) => (
        <ContentLi key={idx}>
          <HeadDiv>
            <div>
              {el.brand === 'Mega' ? (
                <img src={MEGA} />
              ) : el.brand === 'Lotte' ? (
                <img src={LOTTE} />
              ) : (
                <img src={CGV} />
              )}
              <span className="area">{el.name}</span>
            </div>
            <span className="address">{el.address}</span>
          </HeadDiv>
          <ContentUl>
            <TimeBox 상영정보={el.screenInfoList} />
          </ContentUl>
        </ContentLi>
      ))}
    </ContainerUl>
  );
};

export default CinemaBox;

const ContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  li {
    list-style: none;
  }

  > div {
    margin-top: 20px;
    width: 1024px;
  }

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;

    > li:last-child {
      margin-bottom: 52px;
    }

    > div {
      width: 690px;
    }
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;

    > li:last-child {
      margin-bottom: 52px;
    }

    > div {
      width: 320px;
    }
  }
`;

const ContentLi = styled.li`
  width: 1032px;
  margin: 52px 84px;

  //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
  //태블릿
  @media all and (max-width: 1024px) {
    width: 690px;
    margin: 52px 0px 0px 0px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    width: 320px;
    margin: 30px 0px 0px 0px;
  }
`;

const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  > div {
    display: flex;
    align-items: center;
    > span {
      margin-left: 10px;
    }
  }

  .area {
    font-size: 24px;
    font-weight: 700;
  }

  .address {
    color: #626262;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: start;

    .area {
      font-size: 16px;
    }

    .address {
      font-size: 12px;
    }
  }
`;

const ContentUl = styled.ul`
  background-color: var(--sub-color2);

  border-radius: 16px;
  padding: 40px 88px;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    border-radius: 8px;
    padding: 24px 40px;
  }
`;
