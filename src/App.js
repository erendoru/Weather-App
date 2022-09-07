import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Weather from "./components/Weather";
import axios from "axios";
import "./App.scss";

function App() {
  const [location, setLocation] = useState("");

  const [weather, setWeather] = useState([]);

  const [number, setNumber] = useState('℃');

  useEffect(() => {
    if (location) {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=6e633bdc69f045f58b2234957222708&q=${location}&aqi=no`
        )
        .then((response) => setWeather(response.data))
        .catch((error) => console.log(error));
    }
  }, [location]);


console.log(number)

  return (
    <div className="App">
      
      <Sidebar
        setLocation={setLocation}
        temps={number === '℃' ? weather?.current?.temp_c : weather?.current?.temp_f}
        condition={weather?.current?.condition?.text}
        place={weather?.location?.name}
        number={number}
      />
      <Weather infos={weather?.current} setNumber={setNumber} />
    </div>
  );
}

export default App;
