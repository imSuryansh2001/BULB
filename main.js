var myBulb = document.getElementById("bulb"); // fetching bulb
var buttonOn = document.getElementById("btt-one"); // ON
var buttonOff = document.getElementById("btt-two"); // OFF


buttonOn.addEventListener("click",change=>{ // for on 

   myBulb.style.color  = "yellow";

});


buttonOff.addEventListener("click",change=>{ // for off

   myBulb.style.color  = "gray";

});
