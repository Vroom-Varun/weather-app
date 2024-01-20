import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weather from "./components/Weather";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = import.meta.env.VITE_SOME_KEY;
  const apiURL = import.meta.env.VITE_SOME_ENDPOINT;
  async function fetchWeather() {
    /*
    to do :
    1. Make it so it's the current date when clicked such that it's not manual
    2. Split up the api call into concatonated, we need to use our env variables here 
    */
    // const endpoint = apiURL + '?key=c3e3f61c43374f5b9c572755242001&q=94542&dt=2024-02-20'
    const response = await fetch(endpoint);
    const data = response.json();
    setWeatherData(data);
    console.log(data);
    console.log("Button Pressed");
  }

  return (
    <>
      <div className="w-1/2 justify-center align-middle fixed translate-y-[-50%] bg-[#2e2e38] min-h-64 rounded-md flex-row">
        <h1 className="text-3xl text-left m-4 ml-12 font-sans text-white">
          Forecast
        </h1>
        <Weather />
        <div className="button-base flex items-center justify-end mt-5 mr-16">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => fetchWeather()}>
            Button
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
