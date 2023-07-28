import { styled } from 'styled-components';

const FormCheck = () => {
  return (
    <ContainerForm>
      <div>
        <Content>
          <label htmlFor="nickname" className="font">
            닉네임
          </label>
          <div>
            <input id="nickname" type="text" placeholder="사용할 닉네임을 입력해주세요" />
            <span>*5자 이내로 입력</span>
          </div>
        </Content>
        <Content className="content-gender">
          <label htmlFor="gender" className="font">
            성별
          </label>
          <div>
            <input id="gender" type="checkbox" />
            남자
            <input type="checkbox" />
            여자
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
        <button>완료</button>
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
