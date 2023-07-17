import axios from 'axios';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  console.log('hi');
  const api = import.meta.env.VITE_API;
  console.log(api);

  axios
    .get(`https://openapi.gg.go.kr/MovieTheater?key=${api}&Type=json&pIndex=1&pSize=100&SIGUN_NM=수원시`)
    .then(res => console.log(res))
    .catch(error => console.log(error));

  return (
    <div>
      <NavBar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
