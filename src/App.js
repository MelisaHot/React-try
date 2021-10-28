import image from './images/10.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>HELLLO WORLD </h1>
      <img src={image} alt="nema slike" />
      <p> OVO JE PARAGRAF </p>
      <p>OVO JE NOVI PARAGRAF</p>
      <img src={image} alt="nema slike" />
      <p> OVO JE PARAGRAF </p>
    </div>
  );
}

export default App;
