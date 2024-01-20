import { useState } from "react";

function Weather() {
  return (
    <>
      <div className="weather-base bg-[#1e1f24] rounded-full h-14 mx-auto w-10/12 text-center flex items-center">
        <div className="icon-base justify-start">
          <span className="text-4xl">🌨️</span>
        </div>
        <div className="flex items-center justify-center flex-grow ml-2">
          <span className="text-4xl">49</span>
          <span className="text-xl ml-1">°F</span>
        </div>
      </div>
    </>
  );
}

export default Weather;
