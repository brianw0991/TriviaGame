
$(document).ready(function(){ 

    // var answerButton = $("#answerBox").html("<button type='button' class='btn btn-primary btn-lg'>Answer</button>");
    var eagleScream = new Audio("assets/audio/scream.wav")
    var questionArray = ["who was the second person to walk on the moon?", "what year was the declaration of independence signed?", "How many presidents has the United States inaugurated?", "What year did the attack on Pearl Harbor take place?", "The Statue of Liberty was a gift from which country?"];
    var answerArray =[["Neil Armstrong", "Pete Conrad", "Buzz Aldrin", "Alan Bean"],["1776", "1964", "1812", "1861"], ["39", "45", "51", "62"], ["1942", "1987", "1954", "1941"], ["France", "Indonesia", "Mexico", "Russia"]];
    var correctAnswers = ["C. Buzz Aldrin", "A. 1776", "B. 45", "D. 1941", "A. France"]
    var questionCounter = 0;
    var counter = 0;
    var gameHTML;
    var clock;


    function startGame() {
        $("#gameJumbotron").hide();
        console.log("bob");
        $("#startBbutton").html(startButton);
    }

    startGame();

    // on click of begin button, first array of radio buttons is shown along with first question, begin button is hidden for duration of game
    $("#startButton").on("click", startButton, function(event){
        console.log("jimbob")

        myMove();

        fillGame();

        timerWrapper();
    });

    function myMove() {
        eagleScream.play();
        var elem = document.getElementById("#eagle"); 
        var pos = "0";
        var id = setInterval(frame, 10);
        function frame() {
            if (pos == 150) {
                clearInterval(id);
                $("#startJumbotron").hide();
                $("#gameJumbotron").show();
            } else {
                pos++; 
                elem.style.top = pos; 
                elem.style.left = pos + "px"; 
            };
        };
    };

    function fillGame(){
        
        gameHTML = "<p class='text-center timer-p'>Time Remaining<span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer>C." + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] +"</p>";

        $("#gameJumbotron").html(gameHTML);
    }

    function timerWrapper() {
        clock = setinterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                callTimeLoss();
            }
        }
    }
});