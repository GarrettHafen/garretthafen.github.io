let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?l&id=4156210&units=imperial&APPID=ecdde6295be8df07f8a4c8c14c1806bb"; 

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
  document.getElementById("current-temp").innerHTML = weatherData.main.temp;
  console.log(weatherData);
}

let detailsRequest = new XMLHttpRequest();
let detailsAPI = "https://byui-cit230.github.io/weather/data/towndata.json";

detailsRequest.open('GET', detailsAPI, true);
detailsRequest.send();
detailsRequest.onload = function(){
	let detailsData = JSON.parse(detailsRequest.responseText);
	if detailsData.towns.name = "Franklin"{
		document.getElementById("fmoto").innerHTML = detailsData.towns.moto;
		document.getElementById("fyearFounded").innerHTML = detailsData.towns.yearFounded;
		document.getElementById("fpopulation").innerHTML = detailsData.towns.currentPopulation;
		document.getElementById("fannualRainfall").innerHTML = detailsData.towns.averageRainfall;
	}
}