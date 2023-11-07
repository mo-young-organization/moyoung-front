import { styled } from 'styled-components';
import { PropsForm } from './FormType';
import { useEffect, useState } from 'react';
import { nickNameDuplicatePost } from '../../api/api';

// 중복검사 유효성검사시 버튼클릭후 유효성 검사가 아닌 온 체인지로 변경할지? => onblur찾아보기 포커스 잃으면 입력해주세요
// validate 함수 완성하기 => 로직은 리턴 boolean형식으로 이 함수에서 axios요청을 해야함.
// 준상님께 문자가 아닌 true/false로 리턴값을 달라고 해야겠다.
const Nickname = ({ register, errors, watch, trigger, 중복확인, set중복확인 }: PropsForm) => {
  const [isNick, setIsNick] = useState<boolean | undefined>(undefined);
  const [text, setText] = useState('');

  const [status, setStatus] = useState();
  const nick = watch('displayName');
  const req = {
    displayName: nick,
  };

  // 이제 백엔드에서 형식에 안맞으면 400처리
  // 사용가능하면 true
  // 중복이면 false값을 넘겨준다.

  // 일단 중복검사를 누르지 않고 완료를 누르면 중복검사를 해달라는 거까지는 됐다. 근데 여기서 문제

  // 만약 유저가 중복검사를 해서 통과를 한후 다른 닉네임으로 변경을 할시 그 값을 쫓아가서 다시 초기화가 되어야 하는데 그렇지 않고 문구가 뜨지 않는다.
  // 형식에 맞으면 다른닉네임이여도 완료가됨 형식이 틀리면 완료가 안됨.
  // *******내일의 내가 해결해야할 문제 => 사용자가 중복검사를 하고 닉네임을 바꿀시 다시 중복검사와 형식에 맞게 작성하도록 해야한다.

  //   회원 정보 등록

  // 1. 닉네임 중복확인
  // - 유효성 검사를 먼저 거쳐 사용이 가능한 닉네임만 중복확인 실행
  // 백엔드에서는 400에러를 프론트에서도 미리 유효성검사가 가능함
  // => 중복확인 버튼을 누르면 알려주는 것이 아닌 온체인지로 변경
  // => 혹은 중복확인 버튼 클릭시 알려주기

  // - 유효성 검사를 통과하고 중복확인 사용가능한 닉네임이면 =true , 중복닉이면 = false
  // (저장할 상태 필요 => 상태를 어디에 쓰냐 중복검사를 했냐 안했냐를 판단하기 위해 필요하다. => 만약 중복검사를 했어도 값이 바뀐다면 false로 바꾸어서 중복확인이 안된거로 처리해야함)

  // 2. 중복확인이 안되면 완료 안되게
  // => 그래서 저 위에 상태를 사용하여 중복확인을 해달라는 문구를 리턴

  const duplicateHandler = async () => {
    // useState변수명과 다르게 하기위해 1을 붙힘
    console.log('중복검사 버튼 실행');
    const status1 = await nickNameDuplicatePost(req);
    set중복확인(true);
    console.log(status1);

    if (status1 === 400) {
      setIsNick(false);
      setText('닉네임 형식에 맞춰주세요.');
    }
    if (status1 === true) {
      setIsNick(true);
    }
    if (status1 === false) {
      setIsNick(false);
      setText('중복된 닉네임 입니다.');
    }
  };

  const validatePassword = value => {
    console.log('버튼누르면 이게 실행되나?');
    if (중복확인 === false) {
      setIsNick(false);
      setText('중복검사를 해주세요');
      return false;
    }
  };

  useEffect(() => {
    set중복확인(false);
  }, [nick]);

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
          className={isNick === undefined ? 'input black' : isNick ? 'input green' : ' input red'}
          {...register('displayName', {
            required: '닉네임을 입력해주세요.',
            // pattern: { value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,5}$/, message: '닉네임 형식에 맞춰주세요' },
            validate: validatePassword,
          })}
        />
        {isNick ? (
          <div className="nick divgreen">사용 가능한 닉네임입니다.</div>
        ) : text ? (
          <div className="nick divred">{text}</div>
        ) : (
          <div className="nick divred">{errors.displayName?.message}</div>
        )}

        <div className="nick default">
          2~5자로 작성해주세요.
          <br />
          한국어,영어,숫자로 입력해주세요.
        </div>
      </Content>
      <DuplicateButton
        type="button"
        disabled={false}
        onClick={() => {
          trigger('displayName').then(() => duplicateHandler());
          // duplicateHandler();
        }}
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

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    align-items: start;
    flex-direction: column;
    width: 208px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  .input {
    width: 240px;
    height: 37px;

    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }

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

  .divgreen {
    color: green;
  }
  .divred {
    color: red;
  }
  .green {
    border-bottom: 1px solid green;
  }

  .red {
    border-bottom: 1px solid red;
  }

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    .input {
      width: 208px;
      height: 32px;
    }
  }
`;

const DuplicateButton = styled.button`
  width: 73px;
  height: 30px;

  border-radius: 4px;
  margin-left: 16px;
  border: 0;

  background-color: ${props => (props.disabled ? 'gray' : 'var(--main-color)')};
  color: white;

  //브라우저 창 width가 768px보다 작아지는 순간부터 적용
  //모바일
  @media all and (max-width: 767px) {
    margin: 0px;
  }
`;
