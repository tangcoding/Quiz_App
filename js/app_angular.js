    var app = angular.module("app", []); 

    app.controller('quizController', function($scope) {


        $scope.questions = [{
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

        $scope.init = function(){
            $scope.qid = 0; //question index
            $scope.correct_num = 0; //number of correct answer
            $scope.show_submit_button = true;
            $scope.show_next_button = false;
            $scope.feedback_msg = '';
            $scope.show_conclusion = false;
            $scope.beginning = true; 
        }

        $scope.init();


        $scope.get_question = function(){
            $scope.qNum = $scope.questions[$scope.qid].qNum;
            $scope.current_question = $scope.questions[$scope.qid].question;
            $scope.current_choices = $scope.questions[$scope.qid].choices;
        }

        $scope.get_question(); 


        $scope.submit_answer = function(choice){

          if( $scope.choice == $scope.questions[$scope.qid].correct) {
            $scope.feedback_msg = 'Correct! \n' + $scope.questions[$scope.qid].fact;
            $scope.correct_num++;
          }
          else{
            $scope.feedback_msg = 'Wrong answer! \n' + $scope.questions[$scope.qid].fact;

          }

          $scope.show_next_button = true;
          $scope.show_submit_button = false;
          $scope.beginning = false; 

        }

        $scope.next_question = function(){

          $scope.choice = undefined; //clear previous choice

          if($scope.qid < 4){
              $scope.qid++;
              $scope.get_question();
              $scope.show_next_button = false;
              $scope.show_submit_button = true;
          }
          else{
            $scope.show_conclusion = true;
            $scope.show_next_button = false;

          }

          $scope.new_game =function(){
            $scope.init();
            $scope.get_question();
          }

        }


    }); 
