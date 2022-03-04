const match = () => { //updating scores all through out the game

    let p1Score = 0; 
    let p2Score = 0;

    const startMatch = () => { //switching screen display function

        const playClick = document.querySelector(".first button");
        const firstScreen = document.querySelector(".first");
        const game = document.querySelector(".game");
        
        //event listner for play button
        playClick.addEventListener("click", () => {
            firstScreen.classList.add("fadeOut"); //fades out play button and header
            game.classList.add("fadeIn");
        });  
    };
const playGame = () => 
{
    //P1 pick
    const choice = document.querySelectorAll(".choice button");
    const player1hand = document.querySelector(".p1Hand");
    const player2hand = document.querySelector(".p2Hand");

    //P2 pick
    const p2Pick = ["rock", "paper", "scissors"];

    choice.forEach(option =>{
        option.addEventListener("click",function (){

            const p2Num = Math.floor(Math.random() * 3);
            const p2throw = p2Pick[p2Num];
            
compareThrow(this.textContent, p2throw);//call function to compare





           //Display pick
           player1hand.src = `./assets/${this.textContent}.png`;
           player2hand.src = `./assets/${p2throw}.png`;


        });
    });
};




const updateStat = () => {

        const p1score = document.querySelector(".p1Score p");
        const p2score = document.querySelector(".p2Score p");
        p1score.textContent = p1Score;
        p2score.textContent = p2Score;


};

const compareThrow = (p1throw, p2throw) =>{

const winner = document.querySelector(".winner");
    if(p1throw === p2throw){
        winner.textContent = "TIE!";
        return;
    }
    if(p1throw === 'rock'){
        if(p2throw === 'scissors'){
            winner.textContent = "Player 1 Wins!"
            p2Score++;
            return;
            }else{
            winner.textContent = "Player 2 Wins!"
            p2Score++;
            return;
            }
    }
    if(p1throw === 'paper'){
        if(p2throw === 'scissors'){
            winner.textContent = "Player 2 Wins!"
            return;
            }else{
            winner.textContent = "Player 1 Wins!"
            return;
            }
    }
    if(p1throw === 'scissors'){
        if(p2throw === 'rock'){
            winner.textContent = "Player 2 Wins!"
            return;
            }else{
            winner.textContent = "Player 1 Wins!"
            return;
            }
    }

}

startMatch();
playGame();

};
match();