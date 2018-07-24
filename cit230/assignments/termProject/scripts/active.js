/*-----------------------display active tab-----------------------*/
function addActiveClass() {
	var index 			= document.getElementById("index");
	var sales 			= document.getElementById("sales");
	var service 		= document.getElementById("service");
	var adventureTours 	= document.getElementById("adventureTours");
	var contact 		= document.getElementById("contact");
	var events 			= document.getElementById("events");

	var links = [
		contact,
		adventureTours,
		events,
		sales,
		service,
		index
	];

	for(var i = 0; i < links.length; i++){
		if(links[i] === index){
			break;
		}
		else if (links[i].getAttribute("href")==="#"){
			links[i].classList.add("active");
		}
		else{
			links[i].classList.remove("active");
		}
	}
}
addActiveClass();

/*-----------------------carousel behavior-----------------------*/
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
images[3] = 'assets/bikePart4.jpeg';
images[4] = 'assets/bikePart5.jpeg';
images[5] = 'assets/bikePart6.jpeg';

partNames[0] = 'Dohicky';
partNames[1] = 'Thingamabob';
partNames[2] = 'TheHeckIsThis?';
partNames[3] = 'ThatOneThing';
partNames[4] = 'Click Clack';
partNames[5] = 'Twisty Bit';

partPrices[0] = '$12.99';
partPrices[1] = '$22.33';
partPrices[2] = '$0.55';
partPrices[3] = '$10.55';
partPrices[4] = '$330.55';
partPrices[5] = '$20.55';
/*-----------------------carousel left/only-----------------------*/
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
if(window){
	window.onload = images[i];
}

/*-----------------------generate shop page content-----------------------*/
var salesSpots = [1,2,3,4,5,6];
var innerDiv = "";

for(let i = 0; i < salesSpots.length; i++){
	innerDiv += 
	`
		<div class="salesSpot">
			<div class="salesSpotImg">
				<img src="${images[i]}">
			</div>
			<div class="info">
				<div class="salesInfoSales">
					<h3>${partNames[i]} : ${partPrices[i]}</h3>
				</div>
				<div class="learnMoreSales">
					<h3>Description</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum tincidunt mauris, sed aliquam nibh ornare non. Maecenas quis lorem consequat, eleifend ligula et, vulputate nulla.</p>
				</div>
			</div>
		</div>

	`
}
var salesContainer = document.getElementById("salesContent");
if(salesContainer){
	salesContainer.innerHTML = innerDiv;
}


/*-----------------------adventure tour modal-----------------------*/
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");


function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
if(trigger){
	trigger.addEventListener("click", toggleModal);
}
if(closeButton){
	closeButton.addEventListener("click", toggleModal);
}
if(window){
	window.addEventListener("click", windowOnClick);
}




