// generator a random color

const stopBtn = document.querySelector(".stop");
const startBtn = document.querySelector(".start");
const body = document.querySelector("body");

const randomColor = function(){
    const hex = "0123456789ABCDEFGH";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 17)]
    }
    return color;
};

let intervalId

// start button 
startBtn.addEventListener('click' , function (){

   if(!intervalId){
    intervalId = setInterval(changeBGColor , 1000)
   }

    function changeBGColor(){
        body.style.backgroundColor = randomColor();
    }

})

// stop button
stopBtn.addEventListener('click' , function (){

    clearInterval(intervalId);
    intervalId = null;
})