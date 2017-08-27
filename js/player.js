
function Player(){
	this.name = "";
	this.difficulty = "undefined";
	this.answer = "none";
	this.score = {
		easy: 0,
		hard: 0,
		harder: 0
	};

	this.level = {
		easy: 0,
		hard: 0,
		harder: 0
	};

	this.finish = false;
}

Player.prototype.correct = function(){
	this.score[this.difficulty]++;
}

Player.prototype.checkAnswer = function(answer){
	return this.answer == answer;
}

// Vanilla

var index; //array index
var answer; //answer for every questions
var player; //instance of new player every start of game
var color; //color for every instance of difficulty
var timer; //timer for countdown every instance of diff
var cd = 2; //start number for countdown
//for execution
var diff; //difficulty
var mix = randomQuestions(); //mixing of questions
var button = {
	id: false,
	val: false
	};
var msg;
//Random array of numbers from 0 - 24
function randomQuestions(){
	var arrQue = [];
	for(var x = 0; x < 25; x++){
		var num = Math.floor(Math.random() * 25);
		if(arrQue.length != 0){
			//console.log("testing "+num);
			if(arrQue.indexOf(num) == -1){
				arrQue[x] = num;
			}
			else{
				x -= 1;
			}
		}
		else{
			arrQue[x] = num;
		}
	}	
	return arrQue;
}


//Random array of numbers from 0-2
function randomChoices(){
	var arrChoice = [];
	for(var x = 0; x < 3; x++){
		var num = Math.floor(Math.random() * 3	);
		if(arrChoice.length != 0){
			//console.log("testing "+num);
			if(arrChoice.indexOf(num) == -1){
				arrChoice[x] = num;
			}
			else{
				x -= 1;
			}
		}
		else{
			arrChoice[x] = num;
		}	
	}
	return arrChoice;	
}

// function sortNum(arr){
// 	function sortNumber(a,b) {
// 	    return a - b;
// 	}
// 	var numArray = arr;
// 	numArray.sort(sortNumber);
// 	console.log(numArray.join(","));
// // }
// test();
// function test(){
// 	console.log("Im in!");
// 	for (var i = 1; i <= 10; i++) {
// 		i -= 1;
// 		console.log(i);
// 	}
// }
