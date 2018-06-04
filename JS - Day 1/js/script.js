(function(){
	 var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }];

	var questionCounter = 0; // tracks question number
	var selections = []; //array contains user's choices
	var quiz = $('#quiz'); //Quiz div object

	//display initial question
	displayNext();

	//click handler for the 'next' button
	$('#next').on('click', function(e){
		e.preventDefault();

		// suspend click listener during fade animation
		if(quiz.is(':animated')){
			return false;
		}
		choose();

		if (isNaN(selections[questionCounter])){
			alert('Please make a selection!');
		}else{
			questionCounter++;
			displayNext();
		}
	});

	//Click handler for the 'prev' button
	$('#prev').on(click, function(e){
		e.preventDefault();

		if(quiz.is(':animated')){
			return false;
		}
		choose();
		questionCounter--;
		displayNext();
	});

	$('#start').on('click', function(e){
		e.preventDefault();

		if(quiz.is(':animated')){
			return false;
		}
		questionCounter = 0;
		selections = [];
		displayNext();
		$('#start').hide();
	});

	//Animates buttons on hover
	$('.button').on('mouseenter', function(){
		$(this).addClass('active');
	});
	$('.button').on('mouseleave', function(){
		$(this).removeClass('active');
	});

	//Creates and returns the div that contains the questions and answers
	 function createQuestionElement(index) {
	    var qElement = $('<div>', {
	      id: 'question'
	    });
	    
	    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
	    qElement.append(header);
	    
	    var question = $('<p>').append(questions[index].question);
	    qElement.append(question);
	    
	    var radioButtons = createRadios(index);
	    qElement.append(radioButtons);
	    
	    return qElement;
	  }

	//Create a list of answer choices as radio inputs
	function createRadios(index){
		var radioList = $('<ul>');
		var item;
		var input = '';
		for(var i = 0; i < questions[index].choices.length; i++){
			item = $('<li>');
			input = '<input type = "radio" name = "answer" value=' + i + ' />';
			input += questions[index].choices[i];
			item.append(input);
			radioList.append(item);
		}
		return radioList;
	}

	function choose(){
		selections[questionCounter] = +$('input[name ="answer"]:checked').val();
	}

	function displayNext(){
		quiz.fadeOut(function(){
			$('#question').remove();

			if(questionCounter < questions.length){
				var nextQuestion = createQuestionElement(questionCounter);
				quiz.append(nextQuestion).fadeIn();
				if(!(isNaN(selections[questionCounter]))){
					$('input[value='+selections[questionCounter]+']').prop('checked',true);
				}

				if(questionCounter === 1){
					$('#prev').show();
				}else if(questionCounter === 0){
					$('#prev').hide();
					$('#next').show();
				}
			}else {
				var scoreElem = displayScore();
				quiz.append(scoreElem).fadeIn();
				$('#next').hide();
				$('#prev').hdie();
				$('#start').show();
			}
		});
	}


	function displayScore(){
		var score = $('<p>', {id: 'question'});

		var numCorrect = 0;
		for(var i = 0; i < selections.length; i++){
			if(selections[i] === questions[i].correctAnswer){
				numCorrect++;
			}
		}

		score.append('You got' + numCorrect + ' questions out of' + questions.length + 'right!');
		return socre;
	}

})();

