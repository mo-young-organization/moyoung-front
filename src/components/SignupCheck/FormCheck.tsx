import { styled } from 'styled-components';

const FormCheck = () => {
  return (
    <ContainerForm>
      <div>
        <div>
          <div className="font">닉네임</div>
          <input type="text" placeholder="사용할 닉네임을 입력해주세요" />
          <span>*5자 이내로 입력</span>
        </div>
        <div>
          <div className="font">성별</div>
          <input type="checkbox" />
          남자
          <input type="checkbox" />
          여자
        </div>
        <div>
          <div className="font">나이대</div>
          <input type="checkbox" />
          10대
          <input type="checkbox" />
          20대
          <input type="checkbox" />
          30대 이상
        </div>
      </div>
      <div className="button-check">
        <button>완료</button>
      </div>
    </ContainerForm>
  );
};

export default FormCheck;

const ContainerForm = styled.form`
  background-color: pink;

  width: 680px;
  height: 355px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .button-check {
    background-color: aqua;

    height: 100%;

    display: flex;
    align-items: end;
  }

  .font {
    font-size: 20px;
    font-weight: 700px;
  }
`;
