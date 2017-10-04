//JS code goes here
//first method
var turn = false;
function play(event){
console.log(event);
event.target.innerHTML = turn?"O" : "X";
turn = !turn;
}

//second method
// var cell0= window.document.getElementById("0");
//
// cell0.addEventListener('click',play);
