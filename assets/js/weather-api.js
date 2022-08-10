// jshint esversion: 6
/*jshint sub:true*/
let wname = document.getElementById('wname');
let desc = document.getElementById('desc');
let mintemp = document.getElementById('mintemp');
let maxtemp = document.getElementById('maxtemp');
let windspeed = document.getElementById('windspeed');

weatherInfo();
function weatherInfo() {
  const cityName = 'Kasane';

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&appid=b4573d2ecf25b6c2f532ec7d25ed457f'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data['name'];
      var mintempValue = data['main']['temp_min'];
      var maxtempValue = data['main']['temp_max'];
      var descValue = data['weather'][0]['description'];
      var windSpeed = data['wind']['speed'];

     //converting Kelvin temperature to celcius
     mintempValue = (mintempValue - 273.15).toFixed(0);
     maxtempValue = (maxtempValue - 273.15).toFixed(0);
     windSpeed = (windSpeed * 1.60934).toFixed(0);

     wname.innerHTML = nameValue;
     mintemp.innerHTML = mintemp.innerHTML + mintempValue + ' &#8451;';
     maxtemp.innerHTML = maxtemp.innerHTML + maxtempValue + ' &#8451;';
     desc.innerHTML = descValue;
     windspeed.innerHTML = windspeed.innerHTML + windSpeed + ' km/h';
      
      
    });

    // .catch((err) => alert('Wrong city name'));
}