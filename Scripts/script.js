
var emailPattern = /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[_a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/;

//var datePatternyyyy-mm-dd = /^\d{4}-\d{2}-\d{2}$/;

//var datePattern= /^[0-9

var datePattern = /^(?!(?![02468][048]|[13579][26]00)..(?!(?!00)[02468][048]|[13579][26])...02.29)\d{4}([\/-])(?=0.|1[012])(?!(0[13578]|1[02]).31|02.3)\d\d\1[012]|3[01]$/;


//var searchBox = document.getElementById("searchBox").value;
//alert(searchBox);

//var inputText = document.getElementById("searchBox").value;


//validate Date in any format--NOT WORKING

function submitForm() {
	var inputEmail = document.getElementById("email").value;
}




function validateDate(){  
	var inputText = document.getElementById("searchBox").value;
	alert(inputText);

	var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  
	
	// Match the date format through regular expression  
	if(inputText.value == dateformat){ 

		document.form1.text1.focus();  
	  
		//Test which seperator is used '/' or '-'  
		var opera1 = inputText.value.split('/');  
		var opera2 = inputText.value.split('-');  
		lopera1 = opera1.length;  
		lopera2 = opera2.length;  
		
		//Extract the string into month, date and year  
		if (lopera1>1){  
			var pdate = inputText.value.split('/');  
		}  
		else if (lopera2>1){  
			var pdate = inputText.value.split('-');  
		}  
		  
		var dd = parseInt(pdate[0]);  
		var mm  = parseInt(pdate[1]);  
		var yy = parseInt(pdate[2]);  
		  
		// Create list of days of a month [assume there is no leap year by default]  
		var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
		
		if (mm == 1 || mm > 2){  

			if (dd>ListofDays[mm-1]){  
				alert('Invalid date format!');  
				return false;  
			}  
		}  
		if (mm==2){  
		  var lyear = false;  
			  if ( (!(yy % 4) && yy % 100) || !(yy % 400)){ 
				lyear = true;  
			  }  
			  if ((lyear==false) && (dd>=29)){ 
				  alert('Invalid date format!');  
				  return false;  
				  
			  }  
			  if ((lyear==true) && (dd>29)){  
				  alert('Invalid date format!');  
				  return false;  
			  }  
		} 
	}  
    else{  
		alert("Invalid date format!");  
		document.form1.text1.focus();  
		return false; 
		
	} 
}
  
function dateAnyFormat(dateString){

	// First check for the pattern
    if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)){ // num{1or2} and num{1or2} and num{4}
		var parts = dateString.split("/");
		var day = parseInt(parts[1], 10);
		var month = parseInt(parts[0], 10);
		var year = parseInt(parts[2], 10
		alert(month + day + year);
	}
	else if (/^\d{4}\/\d{1-2}\/\d{1-2}$/.test(dateString)){ //2001/1/1
		var parts = dateString.split("/");
		var day = parseInt(parts[1], 10);
		var month = parseInt(parts[2], 10);
		var year = parseInt(parts[0], 10);
	}
}
  
// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) // num{1or2} and num{1or2} and num{4}
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12){
        return false;
	}

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
        monthLength[1] = 29;
	}
	
    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};

function validateSearch(){
	var searchBox = document.getElementById("searchBox").value;
	var result;
	
	if(emailPattern.test(searchBox)){
		alert("Email");
		
	}
	if(datePattern.test(searchBox)){
		alert("date");
	}
}
function searchAlert(){
	
	var searchBox = document.getElementById("searchBox").value;
	alert(searchBox);
}

//Not needed
function regEx(){

}

function contactUsSubmit()
{
	alert("Contact us submit");
	var inputEmail = document.getElementById("email").value;
	var firstNameField = document.getElementById("first_name").value;
	var lastNameField = document.getElementById("last_name").value;
	
	if(/^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[_a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/.test(inputEmail){
		var emailField = inputEmail;
		alert(emailField);
	}
	
	else{
		alert("Invalid Email.");
	}

}

function createEventListeners(){
	var btn = document.getElementById("searchBtn");
	var contactUsBtn = document.getElementById("contactUsSubmit");

	if(btn.addEventListener){
		btn.addEventListener("click", validateDate, false);
	} else if (btn.attachEvent){
		btn.attachEvent("onclick", validateDate);
	}
	if(contactUsBtn.addEventListener){
		contactUsBtn.addEventListener("click", contactUsSubmit, false);
	} else if (contactUsBtn.attachEvent){
		contactUsBtn.attachEvent("onclick", contactUsSubmit);
	}
}

//working
if(window.addEventListener){
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent){
	window.attachEvent("onload", createEventListeners);
}