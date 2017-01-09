import axios from 'axios';

const API_KEY="feee6b88f9af453d9ec5e886a8fe1a4f";
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const URL=`${ROOT_URL}&q=${city},us`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
