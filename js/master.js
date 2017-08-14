// Vanilla

var index = 0;
var answer;

var num;

//Random array of numbers from 0 - 24
function randomQuestions(){
	var arrQue = [];
	for(var x = 0; x < 25; x++){
		num = Math.floor(Math.random() * 25);
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
		num = Math.floor(Math.random() * 3	);
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
// }
test();
function test(){
	console.log("Im in!");
	for (var i = 1; i <= 10; i++) {
		i -= 1;
		console.log(i);
	}
}


// Jquery
$(document).ready(function(){

	var inhead = $('.inner-head');
	var con = $('.content');
	var incon = $('.inner-content');
	var ch = $("#ch");
	
	incon.css("opacity", "0");
	incon.hide();
	inhead.css("opacity", "0");
	con.css("height", "150px")

	$('.btn-lg').on("click", function(){
		$('.btn-lg').hide();
		con.animate({height: "370px"})
		inhead.animate({opacity: "1"});
		inhead.text("Choose difficulty:")
		incon.show();
		incon.animate({opacity: "1"});
	});

	function getQuestion(){
		$("#q").text(question.easy[index].question);
		ch.html("<option>"+question.easy[index].choices[0]+"</option>"+
			"<option>"+question.easy[index].choices[1]+"</option>"+
			"<option>"+question.easy[index].choices[2]+"</option>")				
		index++;
	}	

	getQuestion();
	$("#sub").on("click", function(){
		answer = $("#ch").val();
		console.log(answer);
		var i = index-1;
		evaluate(answer, i);
		getQuestion();
	});
		
		function evaluate(answer, i){
			if(answer == question.easy[i].answer){
				console.log("Correct!");
			}
			else{
				console.log("Incorrect!");
			}
		}

});