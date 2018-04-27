
$(document).ready(function(){ 

    var eagleScream = new Audio("assets/audio/scream.wav")
    var questionArray = ["who was the second person to walk on the moon?", "what year was the declaration of independence signed?", "How many presidents has the United States inaugurated?", "What year did the attack on Pearl Harbor take place?", "The Statue of Liberty was a gift from which country?"];
    var answerArray =[["Neil Armstrong", "Pete Conrad", "Buzz Aldrin", "Alan Bean"],["1776", "1964", "1812", "1861"], ["39", "45", "51", "62"], ["1942", "1987", "1954", "1941"], ["France", "Indonesia", "Mexico", "Russia"]];
    var correctAnswers = ["C. Buzz Aldrin", "A. 1776", "B. 45", "D. 1941", "A. France"]
    var selectedAnswer;
    var questionCounter = 0;
    var counter = 0;
    var gameHTML;
    var clock;
    var correct = 0;
    var incorrect = 0;
    var timeOut = 0;
    var startScreen;


    function startGame() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>'MURICA!</a></p>";
    
        $(".Screen").html(startScreen);
    }

    startGame();

    $("body").on("click", ".start-Button", function(event){
        event.preventDefault();
        eagleScream.play();

        fillGame();

        timerWrapper();
    });

    $("body").on("click", ".answer", function(event){

        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswers[questionCounter]){
            console.log("meep!");
            clearInterval(clock);
            callWin()
        } else {
            console.log("moop!");
            clearInterval(clock);
            callLoss();
        };


    });

    function callLoss(){
        incorrect++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The answer is " + correctAnswers[questionCounter] + "</p>" + "<div style='width:100%;height:0;padding-bottom:91%;position:relative;'><iframe src='https://giphy.com/embed/hPPx8yk3Bmqys' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/request-donald-wrong-hPPx8yk3Bmqys'>via GIPHY</a></p>"
    
        $(".Screen").html(gameHTML);

        setTimeout(wait, 5000);
    };

    function callWin(){
        correct++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Murica! that's right, " + correctAnswers[questionCounter] + "</p>" + "<div style='width:100%;height:0;padding-bottom:77%;position:relative;'><iframe src='https://giphy.com/embed/13iiF5KX8sG4fu' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/4th-of-july-fourth-13iiF5KX8sG4fu'>via GIPHY</a></p>"
    
        $(".Screen").html(gameHTML);

        setTimeout(wait, 5000);
    };

    function callTimeLoss(){
        timeOut++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter +"</span></p>" + "<p class='text-center'>TIME'S UP! The answer is " + correctAnswers[questionCounter] + "</p>" + "<div style='width:100%;height:0;padding-bottom:56%;position:relative;'><iframe src='https://giphy.com/embed/rqSrBWn4xyPNm' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm'>via GIPHY</a></p>";
        
        $(".Screen").html(gameHTML);

        setTimeout(wait, 5000);
    };

    function fillGame(){
        
        gameHTML = "<p class='text-center timer-p'>Time Remaining<span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer>C." + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] +"</p>";

        $(".Screen").html(gameHTML);
    };

    function wait(){
        if (questionCounter < 3) {
            questionCounter++;
            fillGame()
            counter = 30;
            timerWrapper();
        } else {
            finalScreen();
        };
    };

    function timerWrapper() {
        clock = setInterval(thirtySeconds, 30000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                callTimeLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        };
    };

    function finalScreen() {
        gameHTML = "<p class='text-center timer-p>Time Remaining: <span class='timer'>" + counter +"</span></p>" + "<p class='text-center>Heres how Merican you are!" + "</p>" + "<p class='correct-summary'>Answers You Know: " + correct + "</p>" + "<p class='wrong-summary'>Answers You Don't Know: " + incorrect + "</p>" + "<p class='unanswered-summary'>Apparently Classified Answers: " + timeOut + "</p>" + "<p class='text-center reset-button-container><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Try Again!</a></p>";
    
        $(".gameScreen").html(gameHTML);
    }

    function resetGame(){
        questionCounter = 0;
        correct = 0;
        incorrect = 0;
        timeOut = 0;
        counter = 30;
        fillGame();
        timerWrapper();
    };
});