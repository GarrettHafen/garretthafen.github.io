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
				document.getElementById(index).classList.add("wiggle");
			}else{
				document.getElementById(index).classList.remove("wrong");
				document.getElementById(index).classList.remove("wiggle");
			}
		}	
	}
	if(info[index]===""){
		return false;
	}else{
		 
	}

	showThankYou();

	//clear Form
	document.getElementById("name").value = "";
	document.getElementById("channel").value = "";
	document.getElementById("email").value = "";
	document.getElementById("software").value = "";
	document.getElementById("otherInfo").value = "";		
	
}

var thankYouContainer = document.getElementById("thankYou");
//add thankyou after form submit
function showThankYou(){
	thankYouContainer.style.display="block";
}

//remove thankyou when x is clicked
function removeThankYou(){
	thankYouContainer.style.display="none";
	document.getElementById("thankYou").style.transform = "";
}

//flip the thank you card before removing
function flip(){
	document.getElementById("thankYou").style.transform = "rotateY(180deg)";
}


//reset errors to wiggle each time
function resetErrors(){
	var resetStuff = document.getElementsByClassName("wiggle");
	var IdStore = new Array();
	if(resetStuff.length != 0){
		for(var i =0; i< resetStuff.length; i++){
			IdStore[i] = resetStuff[i].id;
		}

		for (var j=0; j<IdStore.length; j++){
			document.getElementById(IdStore[j]).classList.remove("wiggle");
			document.getElementById(IdStore[j]).classList.remove("wrong");
			
		}
		setTimeout(function() { validateForm(); }, 50);
	}else{
		validateForm();
	}
}

//single validate when leaving input to clear red box
function singleValidation(id){
	document.getElementById(id).classList.remove("wrong");
}
