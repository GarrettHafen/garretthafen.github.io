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
		alert("Not valid, don't for get capitals matter");
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
			});
		}
		
	});
	setTimeout(function() { getParade(mostRecentFollowers); }, 101);

}
//testing timeing
function getParade(mostRecentFollowers){
	for (var i = 0; i <= 20; i++) {
		time = getRandomTopValue(150,800);
		setTimeout(function() { parade(mostRecentFollowers); }, time);
	}
}

//take followers and insert them into a div that scurries across the page
function parade(mostRecentFollowers){
		var body = document.getElementById("container");
		var rand = Math.floor(Math.random() * 11);
		var topRand = getRandomTopValue(100, 550);
		var leftRand = getRandomTopValue(-400, -150);
		var follower = document.createElement("div");
		follower.innerHTML = mostRecentFollowers[rand];
		follower.setAttribute("class","removable parade");
		follower.style.top = topRand +'px';
		follower.style.left = leftRand +'px';
		body.appendChild(follower);
}

//generate random number for top value
function getRandomTopValue(min, max){
	return Math.floor(Math.random() * (max - min + 1) ) + min;
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
var videoContainer = document.getElementById("videoContainer");

function insertVideo(){
	//remove existing video
	if(insertIframe){
		videoContainer.removeChild(insertIframe);
	}	
	//create iframe with random video
	var randomVideo = videos[Math.floor(Math.random()* 9)];

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

	console.log(info);

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
			/*start here, store the object, clear the form. display the object*/
		}
}