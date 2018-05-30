function getTime(){
	var d = new Date();
	var weekdays = new Array(7);
		weekdays[0] = "Sunday";
		weekdays[1] = "Monday";
		weekdays[2] = "Tuesday";
		weekdays[3] = "Wednesday";
		weekdays[4] = "Thursday";
		weekdays[5] = "Friday";
		weekdays[6] = "Saturady";
	var weekday = weekdays[d.getDay()];
	var months = new Array (12);
		months[0]  = "January";
		months[1]  = "February";
		months[2]  = "March";
		months[3]  = "April";
		months[4]  = "May";
		months[5]  = "June";
		months[6]  = "July";
		months[7]  = "August";
		months[8]  = "September";
		months[9]  = "October";
		months[10] = "November";
		months[11] = "December";
	var month = months[d.getMonth()];
	var year = d.getFullYear();
	var date = d.getDate();
	var fullDate = weekday + ", " + date + " " + month + " " + year;
	document.getElementById("currentdate").innerHTML = fullDate;
	console.log(fullDate);
}
getTime();

function toggleHam(){
	document.getElementByClassName("hamburgerNav")[0].classList.toggle("responsive");
}