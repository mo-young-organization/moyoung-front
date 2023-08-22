import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import ChatModal from '../Chat/ChatModal';

type ArticleProps = {
  data: {
    recruitingArticleId: number;
    title: string;
    nicname: string;
    province: string;
    city: string;
  };
};

const Article = ({ data }: ArticleProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  // chatmodal 여닫기 func
  const openCloseChatModal = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMouseOver = e => {
    // e.stopPropagation();
    e.preventDefault();
    console.log('호버됨');
    setIsHover(true);
  };

  const handleMouseOut = e => {
    // e.stopPropagation();
    e.preventDefault();
    console.log('호버 아웃');
    setIsHover(false);
  };

  const participateHandler = () => {
    console.log('참여하기');
    openCloseChatModal();
  };

  useEffect(() => {
    console.log(isHover);
  }, [isHover]);

  return (
    <LiContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isChatOpen && <ChatModal closeChatModal={openCloseChatModal} />}
      {isHover ? (
        <OutContent className="hover out">
          <MovieTitle>미션 임파서블:데드 레코닝</MovieTitle>
          <DateTime>
            <span className="date">7. 12. 수</span>
            <span className="time">16:50</span>
            <div className="location">5관 | 2D(자막)</div>
          </DateTime>
          <OutFotter>
            <ul className="condition">
              <li>여자만</li>
              <li>20대</li>
            </ul>
            <button type="button" onClick={participateHandler}>
              <span>참여하기</span>
              <span>2/4</span>
            </button>
          </OutFotter>
        </OutContent>
      ) : (
        <OnContent className="hover on">
          <div>
            <Head>
              <div>
                <span className="nick">닉네임</span>
                <span className="gray">20대</span>
              </div>
              <span className="gray">1시간 전</span>
            </Head>
            <Title>{data.title}</Title>
          </div>
          <OnFotter>
            <div></div>
            <div className="province">경기</div>
            <div className="city">고양스타필드</div>
          </OnFotter>
        </OnContent>
      )}
    </LiContainer>
  );
};

export default Article;

const LiContainer = styled.li`
  width: 240px;
  height: 340px;
  border-radius: 20px;
  background-color: #6a6a6a;

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
