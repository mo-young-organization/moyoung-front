import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const FormCheck = () => {
  const [nick, setNick] = useState('');
  const [isNick, setIsNick] = useState(false);

  //닉네임 정규식
  // - 2자 이상 5자 이하, 영어 또는 숫자 또는 한글로 구성
  // * 특이사항 : 한글 초성 및 모음은 허가하지 않는다.
  const nickTest = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,5}$/

  const userFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("당연히 이건 값이 나오지")
  };

  const nicknameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 닉네임 중복 검사 5자 이내로 입력 ( 5자 까지 가능 )
    // 중복 검사도 통과 해야지만 setNick에 넣으면 nick은 가능한 닉네임값이 됨
    const nickValue = event.target.value;
    setNick(nickValue)
  };

  const buttonClickHandler = () => {
    console.log("button클릭")
    console.log(nick);
  }

  useEffect(() => {
    if (nickTest.test(nick)) {
      setIsNick(true);
      console.log("5글자 이내임")
    }
  }, [nick]);

  return (
    <ContainerForm onSubmit={userFormHandler}>
      <div>
        <Content>
          <label htmlFor="nickname" className="font">
            닉네임
          </label>
          <div>
            <input id="nickname" type="text" placeholder="사용할 닉네임을 입력해주세요" onChange={nicknameHandler} />
            <span>*5자 이내로 입력</span>
            <button>중복검사</button>
          </div>
        </Content>
        <Content className="content-gender">
          <label htmlFor="gender" className="font">
            성별
          </label>
          <div>
            <input id="man" type="checkbox" />
            <label htmlFor="man">남자</label>
            <input id="woman" type="checkbox" />
            <label htmlFor="woman">여자</label>
          </div>
        </Content>
        <Content>
          <label htmlFor="age" className="font">
            나이대
          </label>
          <div>
            <input id="age" type="checkbox" />
            10대
            <input id="age" type="checkbox" />
            20대
            <input id="age" type="checkbox" />
            30대 이상
          </div>
        </Content>
      </div>
      <div className="button-check">
        <button type="button" onClick={buttonClickHandler}>완료</button>
      </div>
    </ContainerForm>
  );
};

export default FormCheck;

const ContainerForm = styled.form`
  width: 680px;
  height: 355px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .button-check {
    height: 100%;

    display: flex;
    align-items: end;

    > button {
      background-color: #b8b8b8;
      color: #ffffff;
      width: 150px;
      height: 50px;

      border: none;
      border-radius: 12px;

      font-size: 20px;
      font-weight: 700;
    }
  }

  .font {
    font-size: 20px;
    font-weight: 700px;

    margin-bottom: 8px;
  }

  .content-gender {
    margin: 60px 0px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  #nickname {
    width: 240px;
    height: 37px;

    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
`;
