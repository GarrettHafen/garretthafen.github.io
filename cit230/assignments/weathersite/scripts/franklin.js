//final populate individual franklin
	let individualPageRequest = new XMLHttpRequest();
	let individualPageAPI = "https://api.openweathermap.org/data/2.5/weather?l&id=4347778&units=imperial&APPID=ecdde6295be8df07f8a4c8c14c1806bb"; //baltimore seed data

	individualPageRequest.open('GET', individualPageAPI, true);
	individualPageRequest.send();
	individualPageRequest.onload = function(){
		let individualData = JSON.parse(individualPageRequest.responseText);
		document.getElementById("weatherStatus").innerHTML = individualData['weather'][0].main;
		document.getElementById("high").innerHTML = individualData.main.temp_max;
		document.getElementById("low").innerHTML = individualData.main.temp_min;
		document.getElementById("windSpeed").innerHTML = individualData.wind.speed;

		function windChillCalc(){
			var High = document.getElementById("high").innerHTML;
			var Low = document.getElementById("low").innerHTML;
			var sum = +High + +Low;
			var averageTemp = sum/2;
			var speed = document.getElementById("windSpeed").innerHTML;
			var calc1 = Math.pow(+speed, 0.16);
			var sendBack = document.getElementById("windChill").innerHTML = (35.74 + 0.6215 * averageTemp - 35.75 * calc1 + 0.4275 * averageTemp * calc1).toFixed(2);
		}
			windChillCalc();
	}
	//10 day forecast
	let forecastRequest = new XMLHttpRequest();
	let forecastAPI = "http://api.openweathermap.org/data/2.5/forecast?id=4347778&units=imperial&APPID=ecdde6295be8df07f8a4c8c14c1806bb"

	forecastRequest.open('GET',forecastAPI, true);
	forecastRequest.send();
	forecastRequest.onload = function(){
		let forecastData = JSON.parse(forecastRequest.responseText);
		for (var i = 0; i < 10; i++) {
			document.getElementById("forecast" +[i]).innerHTML = forecastData["list"][i].main.temp + "&deg;";
		}
	}


