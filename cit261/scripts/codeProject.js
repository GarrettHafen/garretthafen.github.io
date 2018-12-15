//ajax show followers
function showFollowers(){
	var userId;
//get input, ran into an api problem that cant be fixed without CORS support/jquery
var userInputTC = document.getElementById("userInputTC").value;
	if(userInputTC === "JaggerNaught"){
		userId = "138666352";
	} else if(userInputTC === "MonkeyMan_Live"){
		userId = "152753505";
	} else if(userInputTC === "aNastyNate"){
		userId = "92097942";
	} else{
		alert("Not valid, don't forget capitals matter");
		return;
	}
//get 10 most recent followers
var mostRecentFollowers =[];
	var getJSONUser = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onload = function() {
			if(xhr.readyState == 4 && xhr.status == "200") {
				callback(JSON.parse(xhr.responseText));
			}
		};
		xhr.setRequestHeader("Client-ID","28e09zuwm5jc0qlxmyu794k482hl28")
		xhr.send();
	};
	var client_id = "28e09zuwm5jc0qlxmyu794k482hl28";

	var url_channels = "https://api.twitch.tv/helix/users/follows?to_id="+userId;
	//get followers
	getJSONUser(url_channels, function(response) {
		for (var i =  0; i <= 19; i++) {
			var mostRecentFollower = response.data[i].from_id;
			var followerURL = "https://api.twitch.tv/helix/users?id="+mostRecentFollower;

			getJSONUser(followerURL, function(response){
				followerName = response.data[0].display_name;
				mostRecentFollowers.push(followerName);
				if(mostRecentFollowers.length === 19){
					getParade(mostRecentFollowers);
				}
			});
			
		}
	});
}
//testing timeing
function getParade(mostRecentFollowers){
	for (var i = 0; i <= 10; i++) {
		time = getRandomValue(150,800);
		setTimeout(function() { parade(mostRecentFollowers); }, time);
	}
}

//take followers and insert them into a div that scurries across the page
function parade(mostRecentFollowers){
		var body = document.getElementById("container");
		var rand = Math.floor(Math.random() * 11);
		var topRand = getRandomValue(200, 750);
		var leftRand = getRandomValue(-400, -150);
		var follower = document.createElement("div");
		follower.innerHTML = mostRecentFollowers[rand];

		follower.setAttribute("class","removable parade");
		follower.style.top = topRand +'px';
		follower.style.left = leftRand +'px';
		body.appendChild(follower);
}


//generate random number for top value
function getRandomValue(min, max){
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//INSERT A RANDOM VIDEO
//create video array
var videos = [
	/*0BOTW*/"https://www.youtube.com/embed/4vBKgbOELzg",
	/*1staxel*/"https://youtube.com/embed/9hyMY6xA6hk",
	/*2slimeRancher*/"https://youtube.com/embed/Gq3Xg7pLkSM",
	/*3legoStarWars*/"https://youtube.com/embed/UwJGg9McOMM",
	/*4skyrim*/"https://youtube.com/embed/e1ATJxDpEGA",
	/*5arkRag*/"https://youtube.com/embed/fwkQKhtOUA0",
	/*6arkMad*/"https://youtube.com/embed/UXTNkBYaE_E",
	/*77d2dA16*/"https://youtube.com/embed/J7hZLz0Epog",
	/*8annunakiArk*/"https://youtube.com/embed/OJLBdMPJbz4",
	/*9stardew*/"https://youtube.com/embed/5O1bVLF7hJc"	
];

var insertIframe;
var videoContainer = document.getElementById("videoContainer");

function insertVideo(){
	//remove existing video
	if(insertIframe){
		videoContainer.removeChild(insertIframe);
	}	
	//create iframe with random video
	var randomVideo = videos[Math.floor(Math.random()* 10)];

	insertIframe = document.createElement("iframe");
	insertIframe.setAttribute("src", randomVideo);
	insertIframe.setAttribute("class", "randomVideo");
	videoContainer.appendChild(insertIframe);

}


//insert sound

//array of sounds
var sounds = {
	death: "images/sounds/PacmanDies.mp3",
	doh:   "images/sounds/Doh.mp3",
	crick: "images/sounds/crickets.mp3",
	ouch:  "images/sounds/scream.mp3",
	appl:  "images/sounds/Applause.mp3",
	coin:  "images/sounds/coin.mp3",
	trium: "images/sounds/taDa.mp3",
	final: "images/sounds/FinalCountdown.mp3",
	music: "images/sounds/PacmanIntermission.mp3",
};

var insertAudio;
var soundContainer = document.getElementById("soundContainer");

function insertSound(sound) {
	// var sound = this.getAttribute('name');
	// console.log(sound + "test");
	//remove existing sound
	if(insertAudio){
		soundContainer.removeChild(insertAudio);
	}

	insertAudio = document.createElement("audio");
	insertAudio.setAttribute("src", sounds[sound]);
	insertAudio.setAttribute("type", "audio/mp3" );
	insertAudio.setAttribute("autoplay", "autoplay" );
	soundContainer.appendChild(insertAudio);
}


//if text box value is empty change border

function validateForm(){
	var info = {};

	var name = document.getElementById("name").value;
	var channel = document.getElementById("channel").value;
	var email = document.getElementById("email").value;
	var software = document.getElementById("software").value;
	var otherInfo = document.getElementById("otherInfo").value;

	info.name = name;
	info.channel= channel;
	info.email = email;
	info.software = software;
	info.otherInfo = otherInfo;

	for(var index in info){
		for(var index in info){
			if(info[index]===""){
				document.getElementById(index).classList.add("wrong");
			}else{
				document.getElementById(index).classList.remove("wrong");
			}
		}	
	}
	if(info[index]===""){
		return false;
	}else{
		 
	}

	showThankYou();
	localStorage.setItem("Request", JSON.stringify(info));
	//thank you modal that folds out or something fancy
	
	//print previous request
	printRequest();

	//clear Form
	document.getElementById("name").value = "";
	document.getElementById("channel").value = "";
	document.getElementById("email").value = "";
	document.getElementById("software").value = "";
	document.getElementById("otherInfo").value = "";		
	
}

//function to print previous request
function printRequest(){
	var storedRequest = JSON.parse(localStorage.getItem("Request"));
	var insertRequest;
	var requestContainer = document.getElementById("insertRequestContainer");
	while (requestContainer.hasChildNodes()){
		requestContainer.removeChild(requestContainer.lastChild);
	}

	for(var index in storedRequest){
		var upperCase = index[0].toUpperCase() + index.slice(1);
		insertRequest = document.createElement("LI");
		insertRequest.innerHTML = upperCase + ": " + storedRequest[index];
		insertRequest.setAttribute("class","recentRequest");
		requestContainer.appendChild(insertRequest);
	}
}
// need second function so the other can remove what is currenlty showing
function printRequestOnLoad(){
	var storedRequest = JSON.parse(localStorage.getItem("Request"));
	var insertRequest;
	var requestContainer = document.getElementById("insertRequestContainer");
	for(var index in storedRequest){
		var upperCase = index[0].toUpperCase() + index.slice(1);
		insertRequest = document.createElement("LI");
		insertRequest.innerHTML = upperCase + ": " + storedRequest[index];
		insertRequest.setAttribute("class","recentRequest");
		requestContainer.appendChild(insertRequest);
	}
}

var thankYouContainer = document.getElementById("thankYou");
//add thankyou after form submit
function showThankYou(){
	thankYouContainer.style.display="block";
}

//remove thankyou when x is clicked
function removeThankYou(){
	thankYouContainer.style.display="none";
}

//flip the thank you card before removing
function flip(){
	document.getElementById("thankYou").style.transform = "rotateY(180deg)";
}
