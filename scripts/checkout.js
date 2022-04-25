// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var submit=document.getElementById("confirm");
submit.addEventListener("click",function(){
    var name=document.getElementById("user_name").Value;
    var seats=document.getElementById("number_of_seats").Value;
    if(seats*100>wallet){
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking successfull!");
        wallet=wallet-(seats*100);
    }
})