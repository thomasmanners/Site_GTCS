//onload callback function
function initvalidation() {
var myForm  = document.getElementById("contact");
    myForm.addEventListener("submit",validateForm);
}
 
function clock() {
  //Clock JS Start
      function datetimeupdate() {
          var today = new Date();
        //Below displays the local time
		document.getElementById("clock").innerHTML = today.toLocaleTimeString(); 
        //Below displays the local date
        document.getElementById("date").innerHTML = today.toLocaleDateString();

      }
    var interval = setInterval(function() { 
    datetimeupdate(); 
    },  1000);
}
    // var datetimestring = "Date - " + day + "/" + month + "/" + year + "." + hour + ":" + minute + ":" + second + "."; //formatting the layout for the date and time output
  
  //Clock JS End
 
  //Contact validation begins
  
 function validateForm(validation) {
	
    var formValid = true;
    var myForm = document.getElementById("contact"); 

    console.log("validating from");
    event.preventDefault(validation);
    
    if (myForm.contactname.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("fullnameRequiredError").style.display = "block";
		document.getElementById("fullnameRequiredError").style.backgroundColor = "red"
        //stop form from submitting
        event.preventDefault();
    } else {
         document.getElementById("fullnameRequiredError").style.display = "none";   document.getElementById("fullnameRequiredError").style.backgroundColor = "green"
    }

    if (myForm.contactemail.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("emailRequiredError").style.display = "block";
		document.getElementById("emailRequiredError").style.backgroundColor = "red"
        //stop form from submitting
        event.preventDefault();
    } else {

		document.getElementById("emailinputRequiredError").style.display = "none";
		document.getElementById("emailinputRequiredError").style.backgroundColor = "green"

    }
  
     if (myForm.message.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("commentRequiredError").style.display = "block";
		document.getElementById("commentRequiredError").style.backgroundColor = "red"
        //stop form from submitting
        event.preventDefault();
    } else {

		document.getElementById("commentRequiredError").style.display = "none";
		document.getElementById("commentRequiredError").style.backgroundColor = "green"
      
    }
  }
  
  function ordervalidation() {
	   var checkbase = false;
	   var num1 = document.getElementsByName("pizzabase")
	   for (var count1 = 0; count1 < num1.length; count1++) {
		   if(num1[count1].checked) {
			  checkbase = true;
			   break;
		   }
	   }
	   if(!checkbase){
		   alert("Select a base from the available options")
	   }
	      var checktopping = false;
	   var num2 = document.getElementsByName("topping")
	   for (var count2 = 0; count2 < num2.length; count2++) {
		   if(num2[count2].checked) {
			   checktopping = true;
			   break;
		   }
	   }
	   if(!checktopping){
		   alert("Select at least one topping from the available options")
	   }
			var checkdelivery = false;
		var num3 = document.getElementsByName("delivery")
	   if  (ordervalidation.message.value == "") {
		   formValid = false; 
		   
		document.getElementById("commentRequiredError").style.display = "block";
		document.getElementById("commentRequiredError").style.backgroundColor = "red"
        //stop form from submitting
        event.preventDefault();
	   }
	}

// Contact validation ends