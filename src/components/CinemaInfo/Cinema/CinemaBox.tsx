//  import TimeBox from './TimeBox';
import { styled } from 'styled-components';
import TimeBox from './TimeBox';
import MEGA from '../../../assets/img/MEGA_logo.png';
import LOTTE from '../../../assets/img/LOTTE_logo.png';
import CGV from '../../../assets/img/CGV_logo.png';
import { CinemaDummy } from './data';

const CinemaBox = ({ data }) => {
  return (
    <ContainerUl>
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
`;

const ContentLi = styled.li`
  width: 1032px;
  margin: 52px 84px;
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
`;

const ContentUl = styled.ul`
  background-color: whitesmoke;

  border-radius: 16px;
  padding: 40px 88px;
`;
