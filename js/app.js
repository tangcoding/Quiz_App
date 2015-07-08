
$(document).ready( function(){

	var qid = 0;
	var correct_num = 0;


    var questions = [{
            question: "Which country comes SECOND to Brazil as the world's largest coffee producer?",
            choices: ["Vietnam", "Columbia", "Ghana", "India"],
            qNum : 1,
            correct : 0,
            fact: "Robusta beans account for most of Vietnam’s coffee output — more than 3.1 billion pounds in 2011."
          },
          {
            question: "Where did coffee originate?",
            choices: ["Peru", "Ethiopia", "Indonesia", "Turkey"],
            qNum : 2,
            correct : 1,
            fact: "Evidence suggests that the first coffee plants grew in the region of Kaffa in central Ethiopia."
          },
          {
            question: "Which roast level contains the highest concentration of caffeine?",
            choices: ["Light Roast", "City Roast", "Espresso Roast", "Dark Roast"],
            qNum : 3,
            correct : 0,
            fact: "The roasting process burns sugars and compounds such as caffeine.  Dark or bold roasts actually have less caffeine than lighter roasts."
          },
          {
            question: "Who drinks the most coffee?",
            choices: ["Finland", "Italy", "Peru", "Brazilian"],
            qNum : 4,
            correct : 0,
            fact: "In 2011, Finns consumed an average of 12.17 kilograms (26.8 pounds) of coffee per person."
          },
          {
              question: "Approximately how long does it take for ground coffee to become stale?",
              choices: ["15 minutes", "2 hours", "1 day", "1 week"],
              qNum : 5,
              correct : 0,
              fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks."
        }];


// When user hit submit button

	$('#submit_button').click(function(){
		submit_answer();
	});


	$('#next_button').click(function(){
		qid++;
		next_question(qid);

	});

	$('#new_button').click(function(){
		qid = 0;
		correct_num = 0;
		start_over();
	});


    function submit_answer(){

	  var msg = '';


	  if( $(".option:checked").val() == questions[qid].correct ) {
		msg = "Correct! <br><br>" + questions[qid].fact;
		correct_num++;
	  }
	  else{
		msg = "Wrong answer! <br><br>" + questions[qid].fact;
	  }

	  $('.output').append(msg);
	  $('#submit_button').hide();
	  $('#in_progress').show();
	  $('#start').hide();
	  $('#next_button').show();
	  $('.correct').text(correct_num);

    }

    function next_question(qid){


    	if (qid <= 4){
    		$('.output').empty();
    		var q_text = "Question " + questions[qid].qNum + ". " + questions[qid].question;
    		$('.question p').text(q_text);
    		$('.answer1').text(questions[qid].choices[0]);
    		$('.answer2').text(questions[qid].choices[1]);
    		$('.answer3').text(questions[qid].choices[2]);
    		$('.answer4').text(questions[qid].choices[3]);
    		$('#submit_button').show();
    		$('#next_button').hide();
    		$(".option:checked").attr('checked', false);

    	}
    	else{
    		$('.question').hide();
    		$('.conclusion').show();
    		$('#new_button').show();
    		$('.output').empty();

    	}

    	return qid;

    }

    function start_over(){

    	next_question(0);
    	$('.question').show();
    	$('#submit_button').show();
    	$('#start').show();
    	$('#in_progress').hide();
    	$('.conclusion').hide();
    	$('#new_button').hide();

    }

});