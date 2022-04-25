// Store the wallet amount to your local storage with key "amount"
var amount=document.getElementById("amount").Value;



var btn=document.getElementById("add_to_wallet");
btn.addEventListener("onclick",function(){
    var amount=document.getElementById("amount").Value;

    var input= JSON.parse(localStorage.getItem("amount"));
    
   input.push(amount)
   
   localStorage.setItem("amount",JSON.stringify(amount));
    console.log(amount);


})




