
// CRITERIA

// GIVEN I am taking a code quiz. DONE.
// THEN a timer starts and I am presented with a question. DONE.
// WHEN I answer a question. DONE
// THEN I am presented with another question. DONE

// WHEN I answer a question incorrectly. IN PROGRESS ...
   // how to add a condition to the timer, so every wrong answer will substract 10 sec.

// THEN time is subtracted from the clock. IN PROGRESS ...
   // show the new timer with the secs substraction.

// WHEN all questions are answered or the timer reaches 0. DONE
// THEN the game is over. DONE.
// WHEN the game is over. DONE.

// THEN I can save my initials and score. IN PROGRESS...
   // how to get the info and store it locally for future references. 

  
// WRITEN IN VANILLA JAVASCRIPT  

var answerArray = [];
var corrrectAnswer = ["answer-1-3","answer-2-3","answer-3-4","answer-4-3","answer-5-4"];
// append new value to the array
// corrrectAnswer.push(10);

var wrongAnswer = ["answer-1-1","answer-1-2","answer-1-4","answer-2-1","answer-2-2","answer-2-4","answer-3-1","answer-3-2","answer-3-3","answer-4-1","answer-4-2","answer-4-4","answer-5-1","answer-5-2","answer-5-3"];
var i = 0;
var questions = ["first-question", "second-question", "third-question", "fourth-question", "fifth-question"];
var correct = "correct!";
var wrong = "wrong!";
var message = document.getElementById("message");
var click = "";


// GIVEN I am taking a code quiz
// WHEN I click the start button

// 1. EVENT "CLICK" STAR QUIZ BTN AND TIMER STAR COUNTING DOWN DESCENDING FROM 60 SEC.
// 1. A timer start descending from 60 sec.
     // 1.1.- if timer hits 0, IT MUST pop up a message. 
     // 1.2.- if user chooses wrong button, it will substract 10 sec from timer.

var starQuiz = document.getElementById("start-quiz").addEventListener("click", function() {

  var count = 60;
  var interval = setInterval(function(){
    document.getElementById('timer').innerHTML=count;
    count--;

    // 1.1.- counter less than 0 will display a message.

    if (count < 0){
      clearInterval(interval);
      
      var alert;
      switch (new Date().getDay()) {
      case 0:
      alert = "Correct!";
      break;
      case 1:
      alert = "Wrong!";
    
    }

    document.getElementById("end-time").innerHTML = "You're time is over ";
    document.getElementById("end-time-1").innerHTML = "You're time is over ";
    document.getElementById("end-time-2").innerHTML = "You're time is over ";
    document.getElementById("end-time-3").innerHTML = "You're time is over ";
    document.getElementById("end-time-4").innerHTML = "You're time is over ";
    document.getElementById("end-time-5").innerHTML = "You're time is over ";
      
    }

  }, 1000);

});


// 1.2.- if user chooses wrong button, it will substract 10 sec from timer.
  // IN PROGRESS...


// code block here //


// 2. On all answer buttons regardless the result.
    // Buttons need to go to the next question.
// 2. EVENT "CLICK" ALL ANSWER BTN TO TRIGGER NEXT QUESTION.

function mySecond() {
  location.replace("#second-question")
}

function myThird() {
  location.replace("#third-question")
}

function myFourth() {
  location.replace("#fourth-question")
}

function myFifth() {
  location.replace("#fifth-question")
}
function myInitials() {
  location.replace("#enter-initials")
};


// 2.1.- uestion 1 / 3 wrong selected buttons will display a Wrong! message.

  var wrongFirstAnswer = document.getElementById("answer-1-1").addEventListener("click", function() {
    document.getElementById("end-time-1").innerHTML = "Your answer was " + wrong;
    });

    var wrongFirstAnswer = document.getElementById("answer-1-2").addEventListener("click", function() {
      document.getElementById("end-time-1").innerHTML = "Your answer was " + wrong;
      });

      var wrongFirstAnswer = document.getElementById("answer-1-4").addEventListener("click", function() {
        document.getElementById("end-time-2").innerHTML = "Your answer was " + wrong;
        });



      // question 2 / 3 wrong selected buttons will display a Wrong! message.

var wrongFirstAnswer = document.getElementById("answer-2-1").addEventListener("click", function() {
  document.getElementById("end-time-2").innerHTML = "Your answer was " + wrong;
  });

  var wrongFirstAnswer = document.getElementById("answer-2-2").addEventListener("click", function() {
    document.getElementById("end-time-2").innerHTML = "Your answer was " + wrong;
    });

    var wrongFirstAnswer = document.getElementById("answer-2-4").addEventListener("click", function() {
      document.getElementById("end-time-2").innerHTML = "Your answer was " + wrong;
      });


      // question 3 / 3 wrong selected buttons will display a Wrong! message.

var wrongFirstAnswer = document.getElementById("answer-3-1").addEventListener("click", function() {
  document.getElementById("end-time-3").innerHTML = "Your answer was " + wrong;
  });

  var wrongFirstAnswer = document.getElementById("answer-3-2").addEventListener("click", function() {
    document.getElementById("end-time-3").innerHTML = "Your answer was " + wrong;
    });

    var wrongFirstAnswer = document.getElementById("answer-3-3").addEventListener("click", function() {
      document.getElementById("end-time-3").innerHTML = "Your answer was " + wrong;
      });


      // question 4 / 3 wrong selected buttons will display a Wrong! message.

var wrongFirstAnswer = document.getElementById("answer-4-1").addEventListener("click", function() {
  document.getElementById("end-time-4").innerHTML = "Your answer was " + wrong;
  });

  var wrongFirstAnswer = document.getElementById("answer-4-2").addEventListener("click", function() {
    document.getElementById("end-time-4").innerHTML = "Your answer was " + wrong;
    });

    var wrongFirstAnswer = document.getElementById("answer-4-4").addEventListener("click", function() {
      document.getElementById("end-time-4").innerHTML = "Your answer was " + wrong;
      });


         // question 5 / 3 wrong selected buttons will display a Wrong! message.

var wrongFirstAnswer = document.getElementById("answer-5-1").addEventListener("click", function() {
  document.getElementById("end-time-5").innerHTML = "Your answer was " + wrong;
  });

  var wrongFirstAnswer = document.getElementById("answer-5-2").addEventListener("click", function() {
    document.getElementById("end-time-5").innerHTML = "Your answer was " + wrong;
    });

    var wrongFirstAnswer = document.getElementById("answer-5-3").addEventListener("click", function() {
      document.getElementById("end-time-5").innerHTML = "Your answer was " + wrong;
      });




// 2.2.-  "correct" message will display for 5 buttons.

  var firstAnswer = document.getElementById("answer-1-3").addEventListener("click", function() {
  document.getElementById("end-time-1").innerHTML = "Your answer was " + correct;
  });
  
  var secondAnswer = document.getElementById("answer-2-3").addEventListener("click", function() {
  document.getElementById("end-time-2").innerHTML = "Your answer was " + correct;
  });
  
  var thirdAnswer = document.getElementById("answer-3-4").addEventListener("click", function() {
  document.getElementById("end-time-3").innerHTML = "Your answer was " + correct; 
  });
  
  var fourttAnswer = document.getElementById("answer-4-3").addEventListener("click", function() {
  document.getElementById("end-time-4").innerHTML = "Your answer was " + correct; 
  });
    
  var fourttAnswer = document.getElementById("answer-5-4").addEventListener("click", function() {
  document.getElementById("end-time-5").innerHTML = "Your answer was " + correct; 
  });
  



// 3. SUM FINAL RESULTS IN PROGRESS...


// var score = 0;

// document.getElementById('submit-initials').onclick = getScore(); {

//   if (corrrectAnswer.clicked == true) { 
//   ++score;
//   }
//   // alert(score);
//   if(document.getElementById('submit').clicked == true) {
//   document.getElementById("fresh-score").innerHTML = "Your final score is " + score;

//   }

// getScore();




