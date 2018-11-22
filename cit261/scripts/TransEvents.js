
function changeColor(){
	var onLoadInput = document.getElementById("onLoad");
	var colors = [
			"lightgrey",
			"lightblue",
			"lightgreen",
			"lightpink",
			"orange"
	]
	var getRandNumber = Math.floor(Math.random()* 5);
	onLoadInput.style.backgroundColor = colors[getRandNumber];
	
}

function fillOnMouseOver(){
	var fillField = document.getElementById("fillOnMouseOver")
	var words = [
		"Bulbasaur",
		"Charmander",
		"Squirtle",
		"Pikachu",
		"Eevee",
		"Meowth",
		"Mew"
	]
	var getRandNumber = Math.floor(Math.random()* 7);
	fillField.value = words[getRandNumber];
}

function useless(){
	alert("This is a useless button");
}

function tooFull(){
	var tooFull = document.getElementById("tooFull");
	var width = tooFull.clientWidth;
	var newWidth = width +5;

	console.log("width is " + width);
	tooFull.style.width = newWidth + "px";
}

function myFunction(){
	var onChange = document.getElementById("onChange");
	onChange.value = "Sorry What was that";
}