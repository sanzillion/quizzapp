// Jquery
$(document).ready(function(){

	setTimeout(function(){
		alert('Hi there! Welcome to Quizzapp! This is a one-page web application using Javascript with Jquery library as a partial completion of the subject IT40 (Web Application) on BS in Information Technology on St. John Paul II College of Davao');
	}, 3000);

	//find this bullshits in the DOM
	var inhead = $('.inner-head');
	var con = $('.content');
	var incon = $('.inner-content');
	var ch = $("#ch");
	var head = $('.header');
	var buts = $('.buts');
	var load = $('.loading');
	var	easy = $("#easy");
	var	hard = $("#hard");
	var	harder = $("#harder");
	var btn = $('.btn');
	con.css("height", "150px")
	//run before shit
	beforeShit();

	//setting things up
	function beforeShit(){
		console.log("Before Shit function on load!");
		//set default
		load.hide();
		load.css("opacity", "0");
		incon.hide();
		inhead.css("opacity", "0");
	}

	function loadCss(){
		$('.circle-inner h1').text("")
		incon.show();
		incon.animate({opacity: "1"});
		buts.children().animate({opacity: "0"});
		console.log("Loading...")
		load.show();
		load.css("opacity", "1");
	}
	
	function withoutBtn(){
		//loding animations
		load.css("opacity", "0");
		load.hide();
		//setting of rules
		var d1 = "easy",d2 = "hard",d3 = "harder";
		if(player.level.easy == 1){
			d1 = "";
		}
		if(player.level.hard == 1){
			d2 = "";
		}
		if(player.level.harder == 1){
			d3 = "";
		}

		con.animate({backgroundColor:"#3498db"});

		//generate scores here
		if(player.finish == true){
			var s1 = player.score.easy, s2 = player.score.hard, s3 = player.score.harder, per, total;
			total = s1 + s2 + s3;
			per = (total / 45) * 100;
			p1 = (s1 / 15) * 100;
			p2 = (s2 / 15) * 100;
			p3 = (s3 / 15) * 100;

			$('#a').html("<button id='"+d1+"' class='mybtn btn-info'><h3>Easy: "+s1+"/15</h3></button>");
			$('#b').html("<button id='"+d2+"' class='mybtn btn-warning'><h3>Moderate: "+s2+"/15</h3></button>");
			$('#c').html("<button id='"+d3+"' class='mybtn btn-danger'><h3>Hard: "+s3+"/15</h3></button>");
			inhead.text(player.name+"'s Overall Score : "+parseInt(per)+"%");

			if (total < 10){
				msg = "You are not IT are you?";
			}
			else if (total >= 10 && total <= 20){
				msg = "Try again!";
			}
			else if (total > 20 && total <= 30){
				msg = "Well not bad!";
			}
			else if (total > 30 && total <= 40){
				msg = "Im beginning to think you are cheating!";
			}
			else{
				msg = "YOU CHEATER!";
			}
		}
		else{
			$('#a').html("<button id='"+d1+"' class='mybtn btn-info'><h3>Easy</h3></button>");
			$('#b').html("<button id='"+d2+"' class='mybtn btn-warning'><h3>Moderate</h3></button>");
			$('#c').html("<button id='"+d3+"' class='mybtn btn-danger'><h3>Hard</h3></button>");
			inhead.text("Choose difficulty:")
		}

		//setting of defaults
		$('.btn-lg').hide();
		head.css("text-align", "center");

		inhead.animate({opacity: "1"});
		incon.show();
		incon.animate({opacity: "1"});

		if(player.finish == true){
			setTimeout(function(){
				alert(player.name+"? "+msg);
				alert('If you want to play again just refresh the page!');
			}, 2000);
		}
	}

	$('.btn-lg').on("click", function(){
		$('.btn-lg').hide();
		con.animate({height: "370px"})
		inhead.animate({opacity: "1"});
		inhead.text("Choose difficulty:")
		incon.show();
		incon.animate({opacity: "1"});
		//instantiate Player
		player = new Player();
		console.log("Instantiate complete");
		setTimeout(function(){
			player.name = prompt("Enter your name : ", "Dzai");
		}, 1000)
	});

//------------------------------------------------------------------------
//Sample code

	// function getQuestion(){
	// 	$("#q").text(questions.easy[index].question);
	// 	ch.html("<option>"+questions.easy[index].choices[0]+"</option>"+
	// 		"<option>"+questions.easy[index].choices[1]+"</option>"+
	// 		"<option>"+questions.easy[index].choices[2]+"</option>")				
	// 	index++;
	// }	

	// getQuestion();
	// $("#sub").on("click", function(){
	// 	answer = $("#ch").val();
	// 	console.log(answer);
	// 	var i = index-1;
	// 	evaluate(answer, i);
	// 	getQuestion();
	// });
		
	// 	function evaluate(answer, i){
	// 		if(answer == question.easy[i].answer){
	// 			console.log("Correct!");
	// 		}
	// 		else{
	// 			console.log("Incorrect!");
	// 		}
	// 	}

//-------------------------------------------------------------------------

	buts.on("click", function(){
		//for score purpose
		button.id = false;
		button.val = false;

		var btnId = $(this).children().attr('id');
		console.log("Id = "+btnId);
		if(btnId != '' && btnId != undefined){
			diff = btnId;

			if(diff == "easy"){
				con.animate({backgroundColor: "#5bc0de"});
			}
			else if(diff == "hard"){
				con.animate({backgroundColor: "#f0ad4e"});
			}
			else{
				con.animate({backgroundColor: "#d9534f"});
			}

			animateThings();
		}
		else{
			console.log("No id! Nothing happens!");
			button.id = true;
		}

	});	

	function reuseAnimate(){
		console.log("Going through reuseAnimate function!");
		//for every instance of choices
		//hide question and buttons
		inhead.animate({opacity: "0", marginLeft: "20px"});
		buts.children().animate({opacity: "0"});
		setTimeout(generateQuestion, 2000);
		setTimeout(generateChoices, 2000);


	}

	function animateOnce(){
		console.log("Going through animateOnce function!");
		//for every instance of difficulty
		player.difficulty = diff;
		player.level[diff] = 1;

		load.css("opacity", "0");
		load.hide();
		head.css("text-align", "left");

		//loading animation
		$('.instructions').hide();

		console.log("Clearing interval");
		stopload();
	}

	function stopload(){
		clearInterval(timer);
		cd = 3;
	}

	function loading(){
		$('.circle-inner h1').text(cd);
		cd -= 1;
	}

	function animateThings(){
		index = 0;

		if(diff == "easy"){
			color = "blueShade";
		}
		else if (diff == "hard"){
			color = "orangeShade";
		}
		else{
			color = "redShade";
		}

		load.show();
		load.css("opacity", "1");
		inhead.animate({opacity: "0"});

		timer = setInterval(function(){
			loading();
		}, 1000);

		buts.children().animate({opacity: "0"});
		//questions and choices
		setTimeout(generateQuestion, 4000);
		setTimeout(generateChoices, 4000);
		setTimeout(animateOnce, 4000);
	}

	function generateQuestion(){
		console.log("Going through Question function!");
		inhead.text(questions[diff][mix[index]].question);
		inhead.animate({opacity: "1", marginLeft: "0"});
	}

	function generateChoices(){
		console.log("Going through Choices function")
		var arrCh = randomChoices();

		var ch1 = questions[diff][mix[index]].choices[arrCh[0]];
		var ch2 = questions[diff][mix[index]].choices[arrCh[1]];
		var ch3 = questions[diff][mix[index]].choices[arrCh[2]];
		
		$('#a').html("<button class='mybtn "+color+"' value='"+ch1+"'><h2>"+ch1+"</h3></button>");
		$('#b').html("<button class='mybtn "+color+"' value='"+ch2+"'><h2>"+ch2+"</h3></button>");
		$('#c').html("<button class='mybtn "+color+"' value='"+ch3+"'><h2>"+ch3+"</h3></button>");
		buts.children().animate({opacity: "1"});
	}
	
	buts.on("click", function(){
		//get value from answer
		var val = $(this).children().val();
		//index = 13; //test
		//see if all levels are covered
		if(index == 13 && player.level.easy == 1 
			&& player.level.hard == 1 && player.level.harder == 1){
			player.finish = true;
		}

		if(val != "" && index <= 14 && val != undefined){
			console.log("Answering = "+val);

			//set correct answer before index increments nextLine
			var correctAns = questions[diff][mix[index]].answer;
			console.log("Correct answer = "+correctAns);
			if(index <= 14){index++;}
			//encode answer into player property 'answer'
			player.answer = val;
			//then checkAnswer through player function
			if(player.checkAnswer(correctAns)){
				//call correct function to add to score
				console.log("Correct!");
				player.correct();
			}else{
				console.log("Incorrect!");
			}


			if(index == 14){
				beforeShit();
				loadCss();
				setTimeout(withoutBtn, 3000);
			}
			else if(index < 14){
				reuseAnimate();				
			}
		}
		else{
			console.log("No value, nothing happens!");
			button.val = true;

			if(button.val == true && button.id == true){
				alert("Pick another difficulty!");
			}
		}
	});

	// $('#c').on("click", function(){
	// 	var val = $('.c').val();
		
	// 	if(val != undefined && index <= 14){
	// 		console.log("Answering A");
	// 		console.log(val);
	// 		reuseAnimate();
	// 	}
	// 	else{
	// 		console.log("STOP BULLSHIT!");
	// 	}
	// });

});