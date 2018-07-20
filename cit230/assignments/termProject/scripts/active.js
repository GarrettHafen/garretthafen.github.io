// display which tab is active
function addActiveClass() {
	var index 			= document.getElementById("index");
	var sales 			= document.getElementById("sales");
	var service 		= document.getElementById("service");
	var adventureTours 	= document.getElementById("adventureTours");
	var contact 		= document.getElementById("contact");
	var events 			= document.getElementById("events");

	var links = [
		index,
		contact,
		adventureTours,
		events,
		sales,
		service
	];

	for(var i = 0; i < links.length; i++){
		if (links[i].getAttribute("href")==="#"){
			links[i].classList.add("active");
		}
		else{
			links[i].classList.remove("active");
		}
	}
}

// set carousel behavior
var i = 0;
var images=[];

images[0] = 'assets/bikePart1.jpeg';
images[1] = 'assets/bikePart2.jpeg';
images[2] = 'assets/bikePart3.jpeg'


function changeImgUp(){
	i++;
	if(i > images.length - 1){
		i = 0;
	}
	document.slide.src = images[i];
}
function changeImgDown(){
	i--;
	if(i < 0){
		i = images.length - 1;
	}
	document.slide.src = images[i];
}
window.onload = images[i];