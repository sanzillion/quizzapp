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

	for(var x = 0; x <= 25; x++){
		num = parseInt(Math.random() * 26);
		checkarr(arr, num)

	}

function checkarr(array, num){
	var arr = array;
	for(var x = 0; x = arr.length; x++){
		if(num == arr[x]){
			return true;
		}
		else{
			return false;
		}
	}
}

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
			$("#q").text(easy[index].question);
			ch.html("<option>"+easy[index].choices[0]+"</option>"+
				"<option>"+easy[index].choices[1]+"</option>"+
				"<option>"+easy[index].choices[2]+"</option>")				
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
			if(answer == easy[i].answer){
				console.log("Correct!");
			}
			else{
				console.log("Incorrect!");
			}
		}

});