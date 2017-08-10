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

$(document).ready(function(){

	var inhead = $('.inner-head');
	var con = $('.content');
	$('.inner-content').css("opacity", "0");
	inhead.css("opacity", "0");
	con.css("height", "150px")

	$('.btn-lg').on("click", function(){
		$('.btn-lg').hide();
		con.animate({height: "250px"})
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