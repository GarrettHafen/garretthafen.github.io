/*get twitch data*/
//get twitch recent followers
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
var mostRecentFollower;

getJSONUser(url_channels, function(response) {
	var mostRecentFollower = response.data[0].from_id;
	var followerURL = "https://api.twitch.tv/helix/users?id="+mostRecentFollower;
	
	getJSONUser(followerURL, function(response){
		followerName = response.data[0].display_name;
		document.getElementById('testRecentFollower').innerHTML = followerName;
	});
});

/*twitch animation*/
var circle = document.getElementById('circle');
var circle2 = document.getElementById('circle2');
var hiddenText = document.getElementById("hiddenText");

function kickOffAnimation() {
	circle.classList.remove("hidden");
	circle2.classList.remove("hidden");
	circle.classList.add("circleAnimation");
	circle2.classList.add("circleAnimation2");
}

function reset() {
	circle.classList.add("hidden");
	circle2.classList.add("hidden");
	circle.classList.remove("circleAnimation");
	circle2.classList.remove("circleAnimation2");
	hiddenText.style.display = "";

}

function removeHiddenText() {
    hiddenText.style.display = "none";
}

