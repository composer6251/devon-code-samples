


















function contactUsSubmit()
{
	alert("Contact us submit");
	var inputEmail = document.getElementById("email").value;
	var firstNameField = document.getElementById("first_name").value;
	var lastNameField = document.getElementById("last_name").value;
	
	if(/^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[_a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/.test(inputEmail))
	{
		var emailField = inputEmail;
		alert(emailField);
	}
	
	else
	{
		alert("Invalid Email.");
	}
	document.location.href = www.google.com;
	window.location = www.google.com;

}

function handleSubmit(evt) {
	if (evt.preventDefault){ //if it's cancellable 
	    evt.preventDefault(); // then cancel it
	}
	else {
		evt.returnValue = false; 
	}
	processCookie();
	document.getElementsByTagName("form")[0].submit();
}


function createEventListeners(){
	
	var contactUsBtn = document.getElementById("contactUsSubmit");


	if(contactUsBtn.addEventListener){
		contactUsBtn.addEventListener("click", contactUsSubmit, false);
	} else if (contactUsBtn.attachEvent){
		contactUsBtn.attachEvent("onclick", contactUsSubmit);
	}
}

	
	if(window.addEventListener){
	window.addEventListener("load", createEventListeners, false);
	} else if (window.attachEvent){
	window.attachEvent("onload", createEventListeners);
	}