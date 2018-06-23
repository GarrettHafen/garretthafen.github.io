let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?l&id=4156210&units=imperial&APPID=ecdde6295be8df07f8a4c8c14c1806bb"; 

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
  document.getElementById("current-temp").innerHTML = weatherData.main.temp;
  console.log(weatherData);
}

