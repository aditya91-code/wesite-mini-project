function validateForm(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;

if(name=="" || email==""){
alert("Please fill all fields");
return false;
}

alert("Form submitted successfully!");
}

function showOffer(){
alert("Special Offer: 5% discount on sports car booking!");
alert("Thank You for Contacting us!");
return true;

}