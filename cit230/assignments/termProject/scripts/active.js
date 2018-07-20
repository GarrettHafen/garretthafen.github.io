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
var partNames=[];
var partPrices=[];
var partName1 = document.getElementById("partName");
var partPrice1 = document.getElementById("price");
var partName2 = document.getElementById("partName2");
var partPrice2 = document.getElementById("price2");

images[0] = 'assets/bikePart1.jpeg';
images[1] = 'assets/bikePart2.jpeg';
images[2] = 'assets/bikePart3.jpeg';

partNames[0] = 'Dohicky';
partNames[1] = 'Thingamabob';
partNames[2] = 'theHeckIsThis?';

partPrices[0] = '$12.99';
partPrices[1] = '$22.33';
partPrices[2] = '$0.55';
/*carousel one or left on xlarge pages*/
function changeImgUp(){
	i++;
	if(i > images.length - 1){
		i = 0;
	}
	document.slide.src = images[i];
	partName1.textContent = partNames[i];
	partPrice1.textContent = partPrices[i];
}
function changeImgDown(){
	i--;
	if(i < 0){
		i = images.length - 1;
	}
	document.slide.src = images[i];
	partName1.innerHTML = partNames[i];
	partPrice1.innerHTML = partPrices[i];
}
/*carousel two or right on xlarge, is hidden on anything smaller*/
function changeImgUp2(){
	i++;
	if(i > images.length - 1){
		i = 0;
	}
	document.slide2.src = images[i];
	partName2.textContent = partNames[i];
	partPrice2.textContent = partPrices[i];
}
function changeImgDown2(){
	i--;
	if(i < 0){
		i = images.length - 1;
	}
	document.slide2.src = images[i];
	partName2.innerHTML = partNames[i];
	partPrice2.innerHTML = partPrices[i];
}
window.onload = images[i];