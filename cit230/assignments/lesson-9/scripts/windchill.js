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


/*f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.*/