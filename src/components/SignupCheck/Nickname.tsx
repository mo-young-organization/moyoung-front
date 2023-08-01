import { styled } from 'styled-components';

const Nickname = ({ register, nick, setNick }) => {
  const nickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };

  const duplicateHandler = () => {
    console.log(nick);
  };

  return (
    <Container>
      <label htmlFor="nickname" className="font">
        닉네임
      </label>
      <div>
        <input
          id="nickname"
          type="text"
          placeholder="사용할 닉네임을 입력해주세요"
          {...register('nick')}
          onChange={nickHandler}
        />
        <span>*5자 이내로 입력</span>
        <button type="button" onClick={duplicateHandler}>
          중복검사
        </button>
      </div>
    </Container>
  );
};

export default Nickname;

const Container = styled.div`
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
