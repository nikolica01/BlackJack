let cards=[]
let cardsEl=document.querySelector("#cards-el")
let sumEl=document.querySelector ("#sum-el")
let  messageEl=document.querySelector("#message-el")
let sum=0
let message=""
let alive=false
let Blackjack=false


function startGame(){
   alive=true
    let firstCard=getrandomNumber()
    let secondCard=getrandomNumber()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function getrandomNumber(){
    let randomCard=Math.floor(Math.random()*13 )+1
if(randomCard > 10){
    return 10
}
else if  (randomCard===1){
    return 11
}
else {
    return randomCard
}
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (i=0;i < cards.length;i++)
    { 
        cardsEl.textContent+=cards[i] + " "
        sumEl.textContent="Sum:"+ sum 
    }

if (sum <= 20 ){
    message="Do you want to draw a new card?"
   
}
else if  (sum===21){
    message="You ' ve got Blackjack!"
    Blackjack=true
}

else {
    message="You are out of game"
    alive=false
}
messageEl.textContent=message;
}

function newCard(){
   if (alive===true && Blackjack===false){
    let trdcard=getrandomNumber()
    sum+=trdcard
 cards.push(trdcard)
 renderGame()
}
}





