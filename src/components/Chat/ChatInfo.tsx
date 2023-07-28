import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { styled } from 'styled-components';

import type { Props } from './ChatContent';

const ChatInfo = (props: Props) => {
  return (
    <ChatContentWrapper>
      <Header>
        <div className="textWrapper ">
          <IoIosArrowBack className="backwardIcon bold button" onClick={() => props.switchModalView('chat')} />
          <span className="margin bold">상세정보</span>
        </div>
        <div className="buttonWrapper ">
          <AiOutlineClose className="margin button" />
        </div>
      </Header>
    </ChatContentWrapper>
  );
};

const ChatContentWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 67px;
  padding: 0 20px;
  font-size: 16px;
  .textWrapper {
    display: flex;
  }

  .button:hover {
    cursor: pointer;
  }
  .backwardIcon {
    font-size: 18px;
  }
  .margin {
    margin-left: 8px;
  }
  .bold {
    font-weight: bold;
  }
`;

export default ChatInfo;
