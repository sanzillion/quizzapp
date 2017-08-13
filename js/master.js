// Vanilla

	var tempanswer;
	var easy = [
	{
		question: "Who are you?",
		choices: ["you", "me"
		, "who"],
		answer: "you"
	},
	{
		question: "Where you live?",
		choices: ["here", "there", "everywhere"],
		answer: "here"
	},
	{
		question: "What you do?",
		choices: ["this", "that", "fuck"],
		answer: "fuck"
	}
	];

var index = 0;
var answer;

var num;
var arr = [];	

	//Random array of numbers from 0 - 24
	for(var x = 0; x < 25; x++){
		num = parseInt(Math.random() * 25);
		if(arr.length != 0){
			//console.log("testing "+num);
			if(!checkarr(arr, num)){
				arr[x] = num;
			}
			else{
				x -= 1;
			}
		}
		else{
			arr[x] = num;
		}
	}

// checking function for the algorithm
function checkarr(array, num){
	var arrz = array;
	var test = 0;
	for(var x = 0; x < arrz.length; x++){
		if(num == arrz[x]){
			test = 1;
		}
	}

	if(test == 1){
		return true;
	}else{
		return false;
	}
}

// function sortNum(arr){
// 	function sortNumber(a,b) {
// 	    return a - b;
// 	}
// 	var numArray = arr;
// 	numArray.sort(sortNumber);
// 	console.log(numArray.join(","));
// }

// Jquery
$(document).ready(function(){

	var inhead = $('.inner-head');
	var con = $('.content');
	$('.inner-content').css("opacity", "0");
	inhead.css("opacity", "0");
	con.css("height", "150px")

	$('.btn-lg').on("click", function(){
		$('.btn-lg').hide();
		con.animate({height: "370px"})
		inhead.animate({opacity: "1"});
		inhead.text("Choose difficulty:")
		$('.inner-content').animate({opacity: "1"});
	});

		var ch = $("#ch");
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