import axios from 'axios';

function App() {
  console.log('hi');
  const api = import.meta.env.VITE_API;
  console.log(api);

  axios
    .get(`https://openapi.gg.go.kr/MovieTheater?key=${api}&Type=json&pIndex=1&pSize=100&SIGUN_NM=수원시`)
    .then(res => console.log(res))
    .catch(error => console.log(error));

  return (
    <>
      <div>ㅎㅇ</div>
    </>
  );
}

export default App;
