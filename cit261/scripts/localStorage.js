//show login form after clicking login
var loginForm = document.getElementById('loginContainer');

//get/display form data
var twitchUserName;
var welcome = document.getElementById('welcome');
var displayUserName = document.getElementById('displayUserName');

function returnFormData(){
	twitchUserName = document.getElementById('twitchUserName').value;
	localStorage.setItem('twitchUserName', JSON.stringify(twitchUserName));
	loginForm.classList.toggle("hidden");
	welcome.classList.toggle("hidden");
	displayUserName.innerHTML = twitchUserName;
	addLogoutButton();
	getTwitchUserId();
	setTimeout(function() { storeFollowersArray(); }, 500);
	setTimeout(function() { createTwitcher(); }, 501);

}

//check storage
var storedUserName;
var warning = document.getElementById('warning');

window.onload = function checkStorage(){
	storedUserName = JSON.parse(localStorage.getItem('twitchUserName'));
	if( typeof storedUserName !== 'undefined' && storedUserName !== null){
		//filled
		welcome.classList.toggle("hidden");
		displayUserName.innerHTML = storedUserName;
		addLogoutButton();
	} else{
	loginForm.classList.toggle("hidden");
	}
}

//clear storage
function removeStorage(){
	localStorage.clear();
	loginForm.classList.toggle("hidden");
	welcome.classList.toggle("hidden");
	removeLogoutButton();
	document.getElementById('twitchUserName').value = "";
	clearArray();
}

//add logout button after signing in
var logoutButton;
var followerButton;
var statusButton;
var listFollowers;
var hamburger = document.getElementById('hamburger');

function addLogoutButton(){ //change to hamburger (maybe leave hamburger?)
	logoutButton = document.createElement("BUTTON");
	logoutButton.innerHTML = "Logout";
	logoutButton.setAttribute("onClick", "removeStorage()");
	hamburger.appendChild(logoutButton);

	followerButton = document.createElement("BUTTON");
	followerButton.innerHTML = "Most Recent Follower";
	followerButton.setAttribute("onClick", "displayLatestFollower()");
	hamburger.appendChild(followerButton);

	statusButton = document.createElement("BUTTON");
	statusButton.innerHTML = "Check Online Status";
	statusButton.setAttribute("onClick", "displayTwitcherStatus()");
	hamburger.appendChild(statusButton);

	listFollowers = document.createElement("BUTTON");
	listFollowers.innerHTML = "Display list of Followers";
	listFollowers.setAttribute("onClick", "listOfFollowers()");
	hamburger.appendChild(listFollowers);

}

//hide logout button at login screen
function removeLogoutButton(){
	hamburger.removeChild(logoutButton);
	hamburger.removeChild(followerButton);
	hamburger.removeChild(statusButton);
	hamburger.removeChild(listFollowers);
	removeStuff();

}

//get/store twitch user id. array -------------------------------
var mostRecentFollowers =[];

function getTwitchUserId(){
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
	var channels = "JaggerNaught";
	var client_id = "28e09zuwm5jc0qlxmyu794k482hl28";
	var section = document.getElementById("main-section");
	var url_channels = "https://api.twitch.tv/helix/users/follows?to_id=138666352";


	getJSONUser(url_channels, function(response) {
		for (var i =  0; i <= 4; i++) {
			var mostRecentFollower = response.data[i].from_id;
			var followerURL = "https://api.twitch.tv/helix/users?id="+mostRecentFollower;

			getJSONUser(followerURL, function(response){
				followerName = response.data[0].display_name;
				mostRecentFollowers.push(followerName); 
			});
		}
		
	});
}
//store to local storage outside for loop/function, didn't work inside.
function storeFollowersArray(){	

	localStorage.setItem("RecentFollowers", JSON.stringify(mostRecentFollowers));
}

//clear array on logout
function clearArray(){

	mostRecentFollowers = [];
}

//create object---------------------------------
function createTwitcher(){
	var twitcher = {
		name: 			twitchUserName,
		latestFollower: mostRecentFollowers[0],
		status: 		"Offline",//can pull that from api
		currentGame: 	"Pokemon: Let's Go" 
	}
	localStorage.setItem("Twitcher", JSON.stringify(twitcher));
}

//pull twitcher data and display
function displayTwitcherStatus(){
	var twitcherStatus = JSON.parse(localStorage.getItem("Twitcher"));
	var twitcherStatusDisplay = document.createElement("H1");
		twitcherStatusDisplay.innerHTML ="Status: " + twitcherStatus['status']; 
		twitcherStatusDisplay.setAttribute("class","removable");
		welcome.appendChild(twitcherStatusDisplay);
}

//display all followers
function listOfFollowers(){
	var followerList = document.createElement("UL");
	var individualFollower =[];
	var storedListFollowers = JSON.parse(localStorage.getItem("RecentFollowers"));
		for(i=0; i<storedListFollowers.length; i++){
			individualFollower = document.createElement("LI");
			individualFollower.innerHTML = storedListFollowers[i];
			followerList.appendChild(individualFollower);
		} 
	welcome.appendChild(followerList);
		
}

//display most recent follower
function displayLatestFollower(){
	var twitcherFollower = JSON.parse(localStorage.getItem("Twitcher"));
	var follower = document.createElement("H1");
		follower.innerHTML = "Most Recent Follower: " + twitcherFollower['latestFollower'];
		follower.setAttribute("class","removable");
		welcome.appendChild(follower);
}

//remove inserted info, SHOULD BE REMOVED AUTOMATICALLY OR ON PAGE LOAD. depends on the function 
function removeStuff(){
	var stuff = document.getElementsByClassName("removable");

	while(stuff.length > 0){
		stuff[0].parentNode.removeChild(stuff[0]);
	}
}
//get twitch id from username (gonna need error handling)

//api AJAX access


