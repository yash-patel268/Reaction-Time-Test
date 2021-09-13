let canvas = document.getElementById("canvas");
let canvasParent = document.querySelector(".canvasParent");

let start = document.getElementById("start");
let timeText = document.getElementById("timeText");
let avgTimeText = document.getElementById("avgTimeText");

let gameStatus = {
    STOP: 1,
    START: 2,
}

let status = gameStatus.STOP;

function randTime(max){
    let result = Math.floor(Math.random() * Math.floor(max))+1;
    result*=1000;
    console.log(result);
    return result;
}

function timeout(time){
    timeout1 = setTimeout( function(){
        canvas.style.background = "rgb(0, 255 , 0)";
        let date1 = new Date();
        timeNow = date1.getTime();

        canvas.addEventListener("click", function(){
            let date2 = new Date();
            timeLater = date2.getTime();
            playTime = (timeLater-timeNow);
            timeText.innerHTML = playTime + " ms";
            console.log(playTime);
        })
    }, time)
}

function changeBackground(time){
    timeout2 = setTimeout ( function(){
        endGame();
    }, time)
}

function endGame(){
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    canvas.style.background = "rgb(255, 0 , 0)";
    start.innerHTML=" Start";
    status=gameStatus.STOP;
    
}

function startGame(){
    let changeTime = randTime(15);
    let endTime = changeTime + 5000;
    status = gameStatus.START;
    canvas.style.background = "rgb(255, 0 , 0)";

    timeout(changeTime);
    changeBackground(endTime);
}

start.addEventListener("click", function(){
    if(status == gameStatus.START){
        endGame();
    }
    else{
        startGame();
        this.innerHTML="stop";
    }
})

canvas.addEventListener("click", function(){
    endGame();
})