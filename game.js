
const letsPlay = document.querySelector('.playButton')
const theGame = document.querySelector('.theGame');
const scissorChoice = document.querySelector('.scissor');
const paperChoice = document.querySelector('.paper');
const rockChoice = document.querySelector('.rock');
const feedBackText = document.querySelector('.feedBackText');
const compScissor = document.querySelector('.compScissor');
const compPaper = document.querySelector('.compPaper');
const compRock = document.querySelector('.compRock');
const score = document.querySelector('.score');
const scoreScreen=document.querySelector('.scoreScreen');
const endWin=document.querySelector('.endWin')
const rpsComp = document.querySelector(".rpsComp")
const newLayout = document.querySelector("#newLayout")
const colMyChoice = document.querySelector('.col');
const vs = document.querySelector('.vs');


let choices = ["rock","paper","scissor"];
let myChoice="";
let computerChoice = "";
let gameScore = 0
let theWinner="";
let newGame=true;



function startTheGame(){
    const notes= document.querySelector('.notes');
    notes.classList.add('hidden');
    letsPlay.classList.add('hidden');
    theGame.classList.remove('hidden');
    onClick();
};

function onClick(){

    rockChoice.addEventListener("mouseover",()=>{
        const textRock=document.querySelector('.textRock')
        textRock.style.color=('rgb(255, 117, 90)')
    })
    rockChoice.addEventListener("mouseout",()=>{
        const textRock=document.querySelector('.textRock')
        textRock.style.color=('white')
    })
    

    rockChoice.addEventListener("click",()=>{
        if(newGame==true){
        rockChoice.disabled
        newGame=false;
        
        myChoice = "rock"
        scissorChoice.classList.add('hidden');
        paperChoice.classList.add('hidden');
        rockChoice.classList.add('rockChoice');
        choice(myChoice)

    }} )  
  
    paperChoice.addEventListener("mouseover",()=>{
        const textpaper=document.querySelector('.textPaper')
        textpaper.style.color=('rgb(97, 155, 250)')
    })
    paperChoice.addEventListener("mouseout",()=>{
        const textpaper=document.querySelector('.textPaper')
        textpaper.style.color=('white')
    })

    paperChoice.addEventListener("click",()=>{
        if(newGame==true){
        paperChoice.disabled
 
        myChoice = "paper"
        scissorChoice.classList.add('hidden');
        rockChoice.classList.add('hidden');
        paperChoice.classList.add('paperChoice');
        choice(myChoice)


    }} )    

    scissorChoice.addEventListener("mouseover",()=>{
        const textScissor=document.querySelector('.textScissor')
        textScissor.style.color=('rgb(255, 255, 122)')
    })
    scissorChoice.addEventListener("mouseout",()=>{
        const textScissor=document.querySelector('.textScissor')
        textScissor.style.color=('white')
    })

  
        scissorChoice.addEventListener("click",()=>{
            if(newGame==true){
            scissorChoice.disabled;
            newGame=false
            myChoice = "scissor"
            rockChoice.classList.add('hidden');
            paperChoice.classList.add('hidden');
            scissorChoice.classList.add('scissorChoice');
            choice(myChoice);

        }} )  
    
  

    feedBackText.classList.remove('hidden')
}    

function choice(myChoice){

    if (myChoice==='rock'){
        feedBackText.innerText ='A Rock, Interesting!'
    } else if (myChoice==='paper'){
        feedBackText.innerText ='Paper, Nice!'
    } else {
        feedBackText.innerText ='Good! A Scissor, '
    }     
    // newGame=false
    compChoice(choices, computerChoice);
    newGame=false
};    


function compChoice(choices, computerChoice){
    let randomNum = Math.floor(Math.random() * 3);
    computerChoice = (choices[randomNum]);
    winner(computerChoice,myChoice);

}   

function winner(computerChoice,myChoice){

    if(computerChoice=="rock" && (myChoice=="scissor")){
         theWinner = "computer"
    } else if (computerChoice=="paper" && myChoice=="rock"){
        theWinner = "computer"
    } else if (computerChoice=="scissor" && myChoice=="paper"){
        theWinner ="computer"

    } else if (computerChoice==myChoice){
        theWinner='draw'
    } 
    else {
        theWinner="me"
    }
    compChoiceIcons(computerChoice)
    scoreUpdate(theWinner)
    feedBackAnimation()
}

function scoreUpdate(theWinner){

    const score = document.querySelector('.gameScore');
    if(theWinner==='me'){
        gameScore+=10
        score.textContent=gameScore
        feedBackText.innerText ='You Win!'
        feedBackText.style.color="rgb(118, 238, 118)"
    } else if (theWinner==='computer'){
        gameScore-=10
        score.textContent=gameScore
        feedBackText.innerText ='You lose!'
        feedBackText.style.color="rgb(238, 144, 118)"
    } else if (theWinner==='draw'){
        gameScore+=1
        score.textContent=gameScore
        feedBackText.innerText ="It's A Draw!"
        feedBackText.style.color="rgb(191, 193, 191)"
    }
}

function compChoiceIcons(computerChoice){

    vs.classList.remove("hidden");
    colMyChoice.classList.remove("col")
    rpsComp.classList.remove("hidden")
    newLayout.classList.add('newLayout')

    if(computerChoice==='rock'){
        compPaper.classList.add('hidden');
        compScissor.classList.add('hidden');

    } else if (computerChoice==='paper') {
        compRock.classList.add('hidden');
        compScissor.classList.add('hidden');
    } else {
        compPaper.classList.add('hidden');
        compRock.classList.add('hidden');
    }

}


function feedBackAnimation(){

    if (theWinner==='me'){
        score.classList.add('win')
    } else if (theWinner ==='computer'){
        score.classList.add('lose')
    } else if (theWinner ==='draw'){
        score.classList.add('draw')
    }

    checkCeleb();
    rsetGame()
}

function rsetGame(){
    const reset=document.querySelector('.reset')
    reset.classList.remove('hidden')
    reset.addEventListener('click',()=>{
        myChoice="";
        computerChoice = "";
        theWinner="";
        newGame=true;
        score.classList.remove('draw')     
        score.classList.remove('win')   
        score.classList.remove('lose')

        reset.classList.add('hidden')
        colMyChoice.classList.add("col")
        newLayout.classList.remove('newLayout')

        scissorChoice.classList.remove('hidden');
        paperChoice.classList.remove('hidden');
        rockChoice.classList.remove('hidden');

        vs.classList.add('hidden');
        rpsComp.classList.add('hidden');

        compPaper.classList.remove('hidden');
        compScissor.classList.remove('hidden');
        compRock.classList.remove('hidden');

        feedBackText.style.color= 'white'
        feedBackText.innerText = "Alright, Choose your hand.";
        
    })
}

function checkCeleb(){
    if(gameScore>=30 || gameScore<=-30){
        celeb()
    } else {
        //nothing
    }
}

function celeb(){
    
    setInterval(celebinside,300)
    function celebinside(){
        const winOrLose = document.querySelector('.winOrLose');

    if (gameScore>=30){

        endGame()
        const createRain = document.createElement('div');
        createRain.classList.add("createRain");
        createRain.style.left = Math.random()* 100 +'vw';
        createRain.style.animationDuration=Math.random()*2+3+'s';

        createRain.innerText= '🎈🎉'
        scoreScreen.style.backgroundColor= randomBg();
        document.body.appendChild(createRain);
        winOrLose.innerText=" feeling lucky today🎈" 

        theGame.innerHTML=""
        feedBackText.innerText='' 

        setTimeout(()=>{
            createRain.remove();

        },3000);
        }else if(gameScore <= -30){
        endGame()

        const createRain = document.createElement('div');
        createRain.classList.add("createRain");
        createRain.style.left = Math.random()* 100 +'vw';
        createRain.style.animationDuration=Math.random()*2+3+'s';

        createRain.innerText= '🌑🚀🚶'
        theGame.innerHTML=""
        feedBackText.innerText=''

        winOrLose.innerText="win is a win 🚶 " 
        document.body.appendChild(createRain);
        scoreScreen.style.backgroundColor= randomBg();

        setTimeout(()=>{
            createRain.remove();

        },3000);

    }else{
        //nothing
    }
    
}}

function randomBg(){
    return `hsl(${Math.floor(Math.random()*360)},50%,50%)`
};

function endGame(){
    endWin.classList.remove('hidden')
    const restartButton=document.querySelector('.restartButton');
    restartButton.addEventListener('click',()=>{
        location.reload();
        return false;
    })
}


function init(){

    letsPlay.addEventListener("click",()=>{
            console.log("let the game begin");

            startTheGame();
        });
};


init();