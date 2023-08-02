import { styled } from 'styled-components';
import { PropsForm } from './FormType';
import { useState } from 'react';

const Nickname = ({ register, errors, watch }: PropsForm) => {
  const [isNick, setIsNick] = useState(false);

  const duplicateHandler = () => {
    const nick = watch('nick');

    // 빈 문자열인지
    // 2 ~ 5자이내 한국어,영어,숫자 사용가능
    // 위에 두개 통과시 중복검사 실행(백엔드로 보내는 코드 => 통과 혹은 실패 코드 받아오는 상태 필요)

    if (nick.length === 0) {
      console.log('빈문자열');
      setIsNick(true);
      return false;
    }
    if (!/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,5}$/.test(nick)) {
      console.log('형식안맞음');
      setIsNick(true);
      return false;
    }
    setIsNick(false);
    console.log('중복검사 하면됨');
  };

  return (
    <Container>
      <Content>
        <label htmlFor="nickname" className="font">
          닉네임
        </label>
        <input
          id="nickname"
          type="text"
          placeholder="사용할 닉네임을 입력해주세요"
          {...register('nick', { required: true, pattern: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,5}$/ })}
        />
        {isNick ? <div>닉네임 형식에 맞춰주세요</div> : <div>5자 이내로 입력</div>}
      </Content>
      <DuplicateButton type="button" onClick={duplicateHandler}>
        중복검사
      </DuplicateButton>
    </Container>
  );
};

export default Nickname;

const Container = styled.div`
  display: flex;
  align-items: center;

  #nickname {
    width: 240px;
    height: 37px;

    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const DuplicateButton = styled.button`
  height: 30px;
`;
