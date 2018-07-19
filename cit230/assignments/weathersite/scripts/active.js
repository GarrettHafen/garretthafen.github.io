function addActiveClass() {
	var index = document.getElementById("index");
	var franklin = document.getElementById("franklin");
	var greenville = document.getElementById("greenville");
	var springfield = document.getElementById("springfield");
	var stormcenter = document.getElementById("stormcenter");
	var gallery = document.getElementById("gallery");

	var links = [
		index,
		franklin,
		greenville,
		springfield,
		stormcenter,
		gallery
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