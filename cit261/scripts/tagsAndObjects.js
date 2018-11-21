
//draw stick
function drawStick(){
	var canvas = document.getElementById("drawPeople");
	if (canvas.getContext("2d")) { // Check HTML5 canvas support
	context = canvas.getContext("2d"); // get Canvas Context object
	
	var startHorizontal = setHorizontal();
	var startVertical = setVertical();
	
	context.beginPath();
	context.fillStyle = "black"; // #ffe4c4
	context.arc(startHorizontal, startVertical, 5, 0, Math.PI * 2, true); // draw circle for head
	// (x,y) center, radius, start angle, end angle, anticlockwise
	context.fill();

	// body
	context.beginPath();
	context.moveTo(startHorizontal, startVertical);
	context.lineTo(startHorizontal, startVertical + 25);
	context.strokeStyle = "black";
	context.stroke();

	// arms
	context.beginPath();
	context.strokeStyle = "black"; // blue
	context.moveTo(startHorizontal, startVertical + 7.5);
	context.lineTo(startHorizontal - 12.5 , startVertical + 12.5);
	context.moveTo(startHorizontal, startVertical + 7.5);
	context.lineTo(startHorizontal + 12.5, startVertical + 12.5);
	context.stroke();

	// legs
	context.beginPath();
	context.strokeStyle = "black";
	context.moveTo(startHorizontal, startVertical + 25);
	context.lineTo(startHorizontal - 10, startVertical + 50);
	context.moveTo(startHorizontal, startVertical + 25);
	context.lineTo(startHorizontal + 10, startVertical + 50);
	context.stroke();
	}

	function setHorizontal(){
		var horizontal = Math.floor(Math.random()* 301);
		return(horizontal);
	}
	function setVertical(){
		var vertical = Math.floor(Math.random()* 100);
		return(vertical);
	}
}

//get info out of form
var racerName;
var racerId;
var racerTime;
var runner = {};
var updatedRunners = [];
//some seed data
function seedData(){
	var runner1 = {
		name: "Garrett",
		id: 1,
		time: 123
	};
	updatedRunners.push(runner1);
	var runner2 = {
		name: "Anna",
		id: 23,
		time: 64
	};
	updatedRunners.push(runner2);
	var runner3 = {
		name: "Miles",
		id: 111,
		time: 1234
	};
	updatedRunners.push(runner3);
	localStorage.setItem("Runners", JSON.stringify(updatedRunners));
}

//set array to 
var runners = [];
localStorage.setItem("Runners", JSON.stringify(runners));

function retrieveData(){
	racerName = document.getElementById("racerName").value;
	racerId = document.getElementById("racerId").value;
	racerTime = document.getElementById("racerTime").value;
	runner = {
		name: racerName,
		id:   racerId,
		time: racerTime
	}

	updatedRunners = JSON.parse(localStorage.getItem("Runners"));
	updatedRunners.push(runner);
	localStorage.setItem("Runners", JSON.stringify(updatedRunners));

	document.getElementById("updateAccount").reset();
}

//INSERT A RANDOM VIDEO
//create video array
var videos = [
	/*BOTW*/"https://www.youtube.com/embed/4vBKgbOELzg",
	/*staxel*/"https://youtube.com/embed/9hyMY6xA6hk",
	/*slimeRancher*/"https://youtube.com/embed/Gq3Xg7pLkSM",
	/*legoStarWars*/"https://youtube.com/embed/UwJGg9McOMM",
	/*skyrim*/"https://youtube.com/embed/e1ATJxDpEGA",
	/*arkRag*/"https://youtube.com/embed/fwkQKhtOUA0",
	/*arkMad*/"https://youtube.com/embed/UXTNkBYaE_E",
	/*7d2dA16*/"https://youtube.com/embed/J7hZLz0Epog",
	/*annunakiArk*/"https://youtube.com/embed/OJLBdMPJbz4",
	/*stardew*/"https://youtube.com/embed/5O1bVLF7hJc"	
];

var insertIframe;
var videoContainer = document.getElementById("video");

function insertVideo(){
	//remove existing video
	if(insertIframe){
		videoContainer.removeChild(insertIframe);
	}	
	//create iframe with random video
	var randomVideo = videos[Math.floor(Math.random()* 9)];

	insertIframe = document.createElement("iframe");
	insertIframe.setAttribute("src", randomVideo);
	insertIframe.setAttribute("class", randomVideo);
	videoContainer.appendChild(insertIframe);

}

//insert random sound

//array of sounds
var sounds = [
	"../images/sounds/PacmanDies.mp3",
	"../images/sounds/PacmanEatingCherry.mp3",
	"../images/sounds/PacmanEatingGhost.mp3",
	"../images/sounds/PacmanExtraLive.mp3",
	"../images/sounds/PacmanIntermission.mp3",
	"../images/sounds/PacmanOpeningSong.mp3",
	"../images/sounds/PacmanSiren.mp3",
	"../images/sounds/PacmanWakaWaka.mp3",
];

var insertAudio;
var soundContainer = document.getElementById("audio");

function insertSound() {
	//remove existing sound
	if(insertAudio){
		soundContainer.removeChild(insertAudio);
	}
	var randomSound = sounds[Math.floor(Math.random()* 7)];

	insertAudio = document.createElement("audio");
	insertAudio.setAttribute("src", randomSound);
	insertAudio.setAttribute("type", "audio/mp3" );
	insertAudio.setAttribute("autoplay", "autoplay" );
	soundContainer.appendChild(insertAudio);
}

//DISPLAY RUNNERS TIME

var bigList;
var listContainer = document.getElementById("runnersContainer");
//get runner input
function displayTime(){
	while(listContainer.firstChild){
		listContainer.removeChild(listContainer.firstChild);
	}

	var bigList = document.createElement('UL');
		bigList.setAttribute("id", "runnersList");
		listContainer.appendChild(bigList);

	var list = document.getElementById("runnersList");

	var runnersArray = JSON.parse(localStorage.getItem("Runners"));
	for(var i = 0; i<runnersArray.length; i++){
		var displayRunner ='';
			displayRunner = document.createElement('LI');
			displayRunner.innerHTML = runnersArray[i]["name"] + ": " + runnersArray[i]["time"] + " Minutes";
			list.appendChild(displayRunner);
	}
}

seedData();