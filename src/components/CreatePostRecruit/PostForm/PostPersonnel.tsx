const PostPersonnel = () => {
  const personnelArr = [
    { title: '인원수', content: ['2', '3', '4', '5'] },
    { title: '성별', content: ['전체', '남자만', '여자만'] },
    { title: '나이대', content: ['10대', '20대', '30대 이상'] },
  ];

  return (
    <div>
      <div>*모집 인원</div>
      <ul>
        {personnelArr.map((el, idx) => (
          <li>
            <div>{el.title}</div>
            {el.content.map((data, index) => (
              <div>
                <input type="radio" />
                <label>{data}</label>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <div>*중복 선택 가능</div>
      <div>*10대는 10대만, 20대 이상은 20대 이상만 선택 가능합니다</div>
    </div>
  );
};

export default PostPersonnel;
