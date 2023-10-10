import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ChatModal from '../Chat/ChatModal';
import { ListProps, PosterProps } from './recruitType';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../util/Cookie';

// export type ArticleProps = {
//   recruitingArticleId: number;
//   title: string;
//   nicname: string;
//   province: string;
//   city: string;
// };

// const Article = ({ data }: { data: ArticleProps }) => {
const Article = ({ data }: { data: ListProps }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  // chatmodal 여닫기 func
  // 이미 modal 열려있다면 안열리게 하는 로직 필요할듯?
  // 동시에 여러개 참여할 수 있나...?
  const openChatModal = () => {
    setIsChatOpen(!isChatOpen);
  };
  const closeChatModal = () => {
    setIsChatOpen(false);
    setIsHover(false);
  };

  const handleMouseOver = e => {
    // e.stopPropagation();
    e.preventDefault();
    setIsHover(true);
  };

  const handleMouseOut = e => {
    // e.stopPropagation();
    e.preventDefault();
    setIsHover(false);
  };

  const navigate = useNavigate();
  const userStatus = getCookie('refreshToken');

  const participateHandler = () => {
    // 회원만 입장할 수 있도록 유효성 검사
    if (!userStatus) {
      alert('회원만 사용이 가능합니다.');
      navigate('/login');
    } else {
      openChatModal();
    }
  };

  // 월/주 계산
  const monthWeek = datas => {
    const monthWeekArr = [];
    if (datas.substring(5, 6) === '0') {
      monthWeekArr.push(datas.substring(6, 7));
    } else {
      monthWeekArr.push(datas.substring(5, 7));
    }

    if (datas.substring(8, 9) === '0') {
      monthWeekArr.push(datas.substring(9, 10));
    } else {
      monthWeekArr.push(datas.substring(8, 10));
    }

    return monthWeekArr.join('.');
  };

  // 요일계산
  const today = data => {
    const todayNum = new Date(data).getDay();
    const strWeak = ['일', '월', '화', '수', '목', '금', '토'];
    return strWeak[todayNum];
  };

  return (
    <LiContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} $posterImg={data.movieThumbnailUrl}>
      {isChatOpen && <ChatModal closeChatModal={closeChatModal} recruitData={data} />}
      {isHover ? (
        <OutContent className="hover out">
          <MovieTitle>{data.movieName}</MovieTitle>
          <DateTime>
            <span className="date">
              {monthWeek(data.startTime)}.{today(data.startTime)}
            </span>
            <span className="time">{data.startTime.substring(11, 16)}</span>
            <div className="location">{data.screenInfo}</div>
          </DateTime>
          <OutFotter>
            <ul className="condition">
              <li>{data.gender}</li>
              <li>{data.age}</li>
            </ul>
            <button type="button" onClick={participateHandler}>
              <span>참여하기</span>
              <span>
                {data.currentNum}/{data.maxNum}
              </span>
            </button>
          </OutFotter>
        </OutContent>
      ) : (
        <OnContent className="hover on">
          <div>
            <Head>
              <div>
                <span className="nick">{data.writerDisplayName}</span>
                <span className="gray">{data.writerAge}</span>
              </div>
              <span className="gray">1시간 전</span>
            </Head>
            <Title>{data.title}</Title>
          </div>
          <OnFotter>
            <div></div>
            <div className="province">{data.cinemaRegion}</div>
            <div className="city">{data.cinemaName}</div>
          </OnFotter>
        </OnContent>
      )}
    </LiContainer>
  );
};

export default Article;

const LiContainer = styled.li<PosterProps>`
  width: 240px;
  height: 340px;
  border-radius: 20px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.$posterImg});
  background-size: 100%;
  background: linear-gradient(to top bottom, 100%, 20%, black);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px 20px;

  .out {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* background-color: yellow; */
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }

  .on {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: fadeIn 0.5s ease-in-out;
  }
`;

const OutContent = styled.div`
  width: 200px;
  height: 290px;

  /* background-color: pink; */
`;

const OnContent = styled.div`
  width: 200px;
  height: 290px;

  /* background-color: pink; */
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;

  .nick {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }

  .gray {
    color: #cacaca;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
`;

const OnFotter = styled.div`
  display: flex;
  flex-direction: column;

  .province {
    color: #e7e7e7;
    font-size: 16px;
    font-weight: 300;
  }

  .city {
    color: #e7e7e7;
    font-size: 20px;
    font-weight: 500;
  }
`;

const MovieTitle = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`;

const DateTime = styled.div`
  .date {
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    margin-right: 8px;
  }

  .time {
    background-color: #d7d7d7;
    width: 68px;
    height: 34px;
    border-radius: 8px;
    padding: 8px;
  }

  .location {
    color: #b8b8b8;
    font-size: 16px;
    font-weight: 300;
  }
`;

const OutFotter = styled.div`
  .condition {
    color: white;
    margin-left: 20px;

    > li {
      list-style-type: disc;
      color: white;
    }
  }

  > button {
    display: flex;
    justify-content: space-between;
    align-content: center;

    background-color: #d7d7d7;
    width: 200px;
    height: 56px;
    border-radius: 4px;
    padding: 12px 16px;

    border: none;

    cursor: pointer;

    > span {
      color: #000000;

      font-size: 20px;
      font-weight: 700;
    }
  }
`;
