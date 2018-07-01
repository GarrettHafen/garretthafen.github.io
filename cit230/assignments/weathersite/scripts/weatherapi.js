//practice api
// let weatherRequest = new XMLHttpRequest();
// let apiURL = "https://api.openweathermap.org/data/2.5/weather?l&id=4156210&units=imperial&APPID=ecdde6295be8df07f8a4c8c14c1806bb"; 

// weatherRequest.open('GET', apiURL, true);
// weatherRequest.send();
// weatherRequest.onload =  function () {
//   let weatherData = JSON.parse(weatherRequest.responseText);
//   document.getElementById("current-temp").innerHTML = weatherData.main.temp;
//   console.log(weatherData);
// }


//assignment 9 home page
let detailsRequest = new XMLHttpRequest();
let detailsAPI = "https://byui-cit230.github.io/weather/data/towndata.json";

detailsRequest.open('GET', detailsAPI, true);
detailsRequest.send();
detailsRequest.onload = function(){
	let detailsData = JSON.parse(detailsRequest.responseText);
	//franklinHome
	document.getElementById("fmoto").innerHTML = detailsData['towns'][0].motto;
	document.getElementById("fyearFounded").innerHTML = detailsData['towns'][0].yearFounded;
	document.getElementById("fpopulation").innerHTML = detailsData['towns'][0].currentPopulation;
	document.getElementById("fannualRainfall").innerHTML = detailsData['towns'][0].averageRainfall;
	//greenvilleHome
	document.getElementById("gmoto").innerHTML = detailsData['towns'][1].motto;
	document.getElementById("gyearFounded").innerHTML = detailsData['towns'][1].yearFounded;
	document.getElementById("gpopulation").innerHTML = detailsData['towns'][1].currentPopulation;
	document.getElementById("gannualRainfall").innerHTML = detailsData['towns'][1].averageRainfall;
	//springfieldHome
	document.getElementById("smoto").innerHTML = detailsData['towns'][2].motto;
	document.getElementById("syearFounded").innerHTML = detailsData['towns'][2].yearFounded;
	document.getElementById("spopulation").innerHTML = detailsData['towns'][2].currentPopulation;
	document.getElementById("sannualRainfall").innerHTML = detailsData['towns'][2].averageRainfall;
}

