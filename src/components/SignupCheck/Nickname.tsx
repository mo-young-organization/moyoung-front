import { styled } from 'styled-components';
import { PropsForm } from './FormType';
import { useEffect, useState } from 'react';

const Nickname = ({ register, errors, watch, trigger }: PropsForm) => {
  const [isNick, setIsNick] = useState<boolean | undefined>()
  const [message, setMessage] = useState<string | undefined>();
  const nick = watch('nick')
  console.log(nick)

  const duplicateHandler = () => {
    // 문제 중복검사 클릭시 처음한번은 무조건 전송이됨 => 문제 : 빈문자열로 넘기면 중복검사에서 통과가 되어버림
    // 이유 : react-hook form은 무조건 통과가 되면 undifind를 넘김 왜냐믄 errors가 없으면 nick이랑 message가
    // 없다고 판단이 되기 때문

    //위 문제가 있었는데 nick으로 하면 값이 없는걸 인지할 수 있다보니깐 nick으로 해결하면 되는 거였다.
    // 그리고 사용 가능한 닉네임입니다. 를 하면서 여기 조건에 백엔드에게 보내는 코드를 추가하면 될거 같다.

    // 그리고 두번 클릭해야지 인식이 돼서 이걸 유즈이펙트로 관리를 하려고 하였다.
    // 그래서 함수를 유즈이펙트에 집어넣어 처음부터 렌더링 되도록 하였고 조건으로 에러메세지가 없고 빈문자열이면 안되도록 하여
    // 조건을 걸었다.

    // 의존성 배열에 함수 동채로 집어넣어서 인식되게 하니깐 두번클릭말고 클릭시 바로 인식이 됐다.
    // 근데 useCallback으로 감싸아야 한다고 오류 메세지가 뜨는데(gpt피셜)
    // 감싸기 전에 과연이게 최선일까...? 라는 생각이 계속 든다.
    // 현우야 이 주석까지 본다면 넌 진짜 최고다 개발자해라 아 1시간 고생하고 한게 이거밖에 안되니 현타 ㅈㄴ오네 휴~
    if(!(errors.nick?.message) && nick !== undefined) {
      console.log('통과?')
      setMessage('사용 가능한 닉네임입니다.')
    } else {
      setMessage(errors.nick?.message)
    }
  }

  useEffect(() => {
duplicateHandler()
  }, [duplicateHandler]);

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
          {...register('nick', {
            required: '닉네임을 입력해주세요',
            pattern: { value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,5}$/, message: '닉네임 형식에 맞춰주세요' },
          })}
        />
        <div className="nick default">
          2~5자로 작성해주세요.
          <br />
          한국어,영어,숫자로 입력해주세요.
        </div>
        {/* {errors && <div>{errors.nick?.message}</div>} */}
        {errors && <div>{message}</div>}
        {/* {isNick && <div>{message}</div>} */}
      </Content>
      <DuplicateButton
        type="button"
        onClick={() => {trigger('nick'); duplicateHandler(); }}
      >
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

  .nick {
    color: gray;
    font-size: 12px;
  }

  .false {
    color: red;
  }

  .complet {
    color: green;
  }
`;

const DuplicateButton = styled.button`
  height: 30px;
`;
