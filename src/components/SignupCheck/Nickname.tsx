import { styled } from 'styled-components';
import { PropsForm } from './FormType';
import { useState } from 'react';
import { nickNameDuplicatePost } from '../../api/api';


// 중복검사 유효성검사시 버튼클릭후 유효성 검사가 아닌 온 체인지로 변경할지? => onblur찾아보기 포커스 잃으면 입력해주세요
// validate 함수 완성하기 => 로직은 리턴 boolean형식으로 이 함수에서 axios요청을 해야함.
// 준상님께 문자가 아닌 true/false로 리턴값을 달라고 해야겠다.
const Nickname = ({ register, errors, watch, trigger }: PropsForm) => {
  const [isNick, setIsNick] = useState<boolean | undefined>(undefined);
  const nick = watch('nick');
  const req = {
    displayName: nick,
  };

  const duplicateHandler = (value) => {
    const errorMessage = errors.nick?.message;
    if (!errorMessage && value !== undefined) {
      console.log('전달');
      nickNameDuplicatePost(req);
      setIsNick(true);
    } else {
      setIsNick(false);
    }
  };

  const validatePassword = (value) => {
    console.log(value)
    if (value === '이강인') {
      return '캉진리';
    }
    return false;
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
          className={isNick === undefined ? 'input black' : isNick ? 'input green' : ' input red'}
          {...register('nick', {
            required: '닉네임을 입력해주세요',
            pattern: { value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,5}$/, message: '닉네임 형식에 맞춰주세요' },
            validate: validatePassword
          })}
        />
        {isNick ? (
          <div className="nick divgreen">사용 가능한 닉네임입니다.</div>
        ) : (
          <div className="nick divred">{errors.nick?.message}</div>
        )}
        <div className="nick default">
          2~5자로 작성해주세요.
          <br />
          한국어,영어,숫자로 입력해주세요.
        </div>
      </Content>
      <DuplicateButton
        type="button"
        onClick={() => {
          trigger('nick').then(() => duplicateHandler());
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
`;

const DuplicateButton = styled.button`
  width: 73px;
  height: 30px;

  border-radius: 4px;
  margin-left: 16px;

  border: 0;
  background-color: #bcbcbc;
  color: white;
`;
