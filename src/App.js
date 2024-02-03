import './App.css';
import { Weather } from './Components/WeatherApp/Weather';
import WeatherStory from './Components/WeatherStory/WeatherStory';

function App() {
  return (
    <div className="App">
      <Weather/>
      <WeatherStory/>
    </div>
  );
}

export default App;
