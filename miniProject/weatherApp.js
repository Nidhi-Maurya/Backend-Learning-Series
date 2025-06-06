import { get } from "http";
import https from "https";
import readline from "readline/promises";

const apiKey='b91f919db87ac176d7a6679b95db984f'

const BASE_URL='https://api.openweathermap.org/data/2.5/weather';

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const getWeather=async (city)=>{
  const url=`${BASE_URL}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response= await fetch(url);
 if(!response.ok){
  throw new Error('City not found. Please check the city name.');
 }
 const weatherData= await response.json();
 console.log(weatherData);

console.log('\nWeather Information:');
console.log(`City Name: ${weatherData.name}`);
console.log(`Country: ${weatherData.sys.country}`);
console.log(`City ID: ${weatherData.id}`);
console.log(`Weather Description: ${weatherData.weather[0].description}`);
console.log(`Temperature: ${weatherData.main.temp} °C`);
console.log(`Humidity: ${weatherData.main.humidity} %`);
console.log(`Pressure: ${weatherData.main.pressure} hPa`);
console.log(`Wind Speed: ${weatherData.wind.speed} m/s`); 
    
  } catch (error) {
    console.log(error);
    
  }

}

const city= await  rl.question('Enter the city name to get its weather info:');
await getWeather(city);

rl.close();