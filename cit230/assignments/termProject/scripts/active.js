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
addActiveClass();

function toggleMenu(){
	console.log("test");
}