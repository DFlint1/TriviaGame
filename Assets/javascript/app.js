//Create a trivia form with multiple answer options to choose from.

//1. Questions
//    Create a button click for each question with correct and incorrect answer option.
//2. Answers
//    Create a button click associated with the correlating question.
///   Don't let a player pick more than one answer.
//3. Countdown
//    limited amount of time to answer the questions-30 seconds
//    Show a Countdown timer
//    Game ends when the countdown timer runs out.
//    at 0 have the new page show up with All Done!
//    Reset when you you are all done on the last page.
//All done page shows up at the end of the final question.
//  Correct Answers:
//  Incorrect Answers:
//  Unanswered Questions
//Flag key sections with specific id names. These are replaced with Javascript.
//Link to Javascript at the end of the file.

//===========================================================================
//Initial Variables



// var correctCounter = 0;
// var incorrectCounter = 0;
// var unansweredCounter = 0;
// var questiona = 0;
// var questionb = 0;
// var answera = ["a", "b", "c", "d"];
// var answerb = ["a", "b", "c", "d"];

//===========================================================================
//Game Counters
//1. how insert a timer box in html


//===========================================================================
//Define the value of each variable







//===========================================================================
//Button Clicks
//Click on the event which is triggered when the mouse clicks on an object.
//onclick


//===========================================================================
//Timer counter & Functions


//1. Timer function:


//  This code will run as soon as the page loads.
window.onload = function() {

    //  Click events for the stopwatch
 $("#start").click(countdown.start);
   $(".start").on ("click",function() { 
    $(".row").removeClass("hidden-test");
   });

};
//     $("#start").click(stopwatch.start);
//     $(".start").on("click", function() {
//         $(".row").removeClass("hidden-test");
//     });

// };

//  Variable that will hold our setInterval that runs the stopwatch
function countdown() {
  var i = document.getElementById('counter');
  i.innerHTML = parseInt(i.innerHTML) -1;
  if (parseInt(i.innerHTML)==0) {
    clearInterval(timerId);
  }
}
var timerId = setInterval(function() { countdown (); },1000);
// var counter;
// //  Our stopwatch object.
// var stopwatch = {
//         time: 30,

//         reset: function() {

//             stopwatch.time = 0;

//         },


//         start: function() {

//             //  TODO: Use setInterval to start the count here.
//             counter = setInterval(stopwatch.count, 1000);

//         },
        // 
        // stop: function() {
        //   alert('this is a game over');
        //   clearInterval(counter);
        // clearInterval(counter) {
        //   gameTime += 1;
        //   if (gameTime < 1){
        //     timerText.text="All Done!";
        // //     clearInterval(counter);
        //   },
        // function clearInterval(counter) {
        //   if (counter =2) {
        //     $("#display").html("game over");
        //     $("#feedback").text("countdowon complete!");
        //   }
    
    // }


//stop: function(counter) {

//  TODO: Use clearInterval to stop the count here.
// function clearInterval(counter) {
//   if(stopwatch.time < 1) {
//     $("#display").html("0");
//     $("#feedback").text("countdown complete!");
//   }
//   }
//   },



// },


// DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//       and save the result in a variable.
// var converted = stopwatch.timeConverter(stopwatch.time);

// },
// count: function() {

//         // DONE: decrement time by 1, remember we cant use "this" here.
//         stopwatch.time--;
        // console.log('hi!!');
        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        // var converted = stopwatch.timeConverter(stopwatch.time);
        // console.log(converted);

        // DONE: Use the variable we just created to show the time in the "display" div.
    //     $("#display").html(stopwatch.time);
    // },

    // setTimeout: function() {






    //   // timeExpires: function() {
    //   //       clearInterval(counter);
    //   //       $("#feedback").html("time is up!");
    //   //       // $(".button").css("display", "block");
    //   //       // $(".button").on("click", console.log("hello"));

    //     },
    // }
// };


// //===========================================================================
// //Functions to run the game
// stopwatch.start();
// stopwatch.stop ();

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// // Starts the Game by running the startGame() function
// startGame();

// // Then initiates the function for capturing key clicks.
// document.onkeyup = function(event) {
//     letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr

//     checkLetters(letterGuessed); // runs the code to check for correctness 
//     roundComplete(); // runs the code after each round is done
// }
