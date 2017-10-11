//JS code goes here

var checked = [
false, false, false,
false, false, false,
false, false, false
];

var score = [
  0,0,0,0,0,0,0,0,0
]

var theEnd = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
	[0,4,8],
	[2,4,6]
];

var trn = true;

var End = false;

var p1=0;
var p2=0;

function play(event){
	var stone = event.target;

	if ( checked[stone.id] === false && End === false ) {

    stone.innerHTML = trn ? "X" : "O";
    score[stone.id] = trn? 1 : 2;
    checked[stone.id] = true;
		trn = !trn;

		console.log(checked);
    console.log(score);


		var results = checkEndGame();

		if (results === 1) {
      p1++;
			console.log("Player 1 won!");
      document.getElementById('E1').innerHTML= "p1";
      document.getElementById('E2').innerHTML ="p1";
			document.getElementById('E6').innerHTML = "Player 1 won!";
			End = true;
      setTimeout(newGame, 2*2000);
		}
		if (results === 2) {
      p2++;
			console.log("Player 2 won!");
      document.getElementById('E4').innerHTML = "p2";
      document.getElementById('E5').innerHTML = "p2";
			document.getElementById('E6').innerHTML = "Player 2 won!";
			End = true;
      setTimeout(newGame, 2*2000);
		}
		if (results === 0) {
			console.log("Tie");
			document.getElementById('E6').innerHTML = "Tie!";
			End = true;
      setTimeout(newGame, 2*2000);
		}
		if (results === false) {
			document.getElementById('E6').innerHTML = "Game Going On";
			console.log("Continue game");
		}
	}
}

function checkEndGame() {
	for (var i = 0; i < theEnd.length; i++) {
		if (
			checked[theEnd[i][0]] !== false &&
			checked[theEnd[i][1]] !== false &&
			checked[theEnd[i][2]] !== false
		) {
			if ( score[theEnd[i][0]] === score[theEnd[i][1]] && score[theEnd[i][1]] === score[theEnd[i][2]] ) {
				if ( score[theEnd[i][0]] === 1) {
					return 1;
				}
				if ( score[theEnd[i][0]] === 2) {
					return 2;
				}
			}
		}
	}

  var equal = true;
	for (var i = 0; i < checked.length; i++) {
		if (checked[i] === false) {
      equal = false;
      break;
		}
	}

	if (equal === true) {
		return 0;
	}
	return false;
}

 function restart(event){
	for(var i = 0; i < checked.length; i++){
		if( checked[i] !== false ) {
			document.getElementById(i).innerHTML = '';
			checked[i] = false;
      score[i] = 0;
		}
	}
	trn = true;
	End = false;
  p1 = 0;
  p2 = 0;

  document.getElementById('E1').innerHTML = "p1";
  document.getElementById('E2').innerHTML = "p1";
  document.getElementById('E4').innerHTML = "p2";
  document.getElementById('E5').innerHTML = "p2";
	document.getElementById("E6").innerHTML = "New Game";
}

function newGame (event){
	for(var i = 0; i < checked.length; i++){
		document.getElementById(i).innerHTML = '';
		checked[i] = false;
    score[i] = 0;
	}
	trn = true;
	End = false;
	document.getElementById("E6").innerHTML = "New Game";
}
