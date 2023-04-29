let player = {
     name : " Player-one " 
}
let balance = 150
let cards = []
let greet = ["Hello", player.name, "welcome ! to blackjack ","am your dealer"]

let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
const cardOne = document.getElementById("card-one")
const cardTwo = document.getElementById("card-two")
const cardThree = document.getElementById("card-three")
const cardFour = document.getElementById("card-four")
const displayCard = document.querySelectorAll("div.cards-class")
  

  playerEl.textContent = player.name + ": $" + balance
  function win(){
   return balance = balance + 100 

  }
  function lose(){
  return balance = balance - 10 

  }
 
function randomcard(){
    let rand = Math.floor(Math.random()*13) + 1
    if (rand > 10)
    {return 10}
    else if (rand === 1)
    {return 11}
    else 
    { return rand }
}
 function firstCardDisplay () { 
    switch (cards[0]) {
        case 1:
        case 11:
            displayCard[0].style.background = 'url(Ace.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
            break;
        case 2:
            displayCard[0].style.background = 'url(CardTwo.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
            break;        
        case 3:
            displayCard[0].style.background = 'url(CardThree.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                break;  
        case 4:
            displayCard[0].style.background = 'url(CardFour.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                            break; 
        case 5:
            displayCard[0].style.background = 'url(CardFive.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                                break;                         
        case 6:
            displayCard[0].style.background = 'url(CardSix.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                    break;
        case 7:
            displayCard[0].style.background = 'url(CardSeven.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                    break;         
        case 8:
            displayCard[0].style.background = 'url(CardEight.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                     break;         
         case 9:
            displayCard[0].style.background = 'url(CardNine.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                     break;  
        case 10:
            displayCard[0].style.background = 'url(CardTen.png) no-repeat'
            displayCard[0].style.backgroundSize = 'contain'
            displayCard[0].style.backgroundPosition = 'center'
                break;  
        default:
            console.log('not found')
            break;
    }
}
function secondCardDisplay () { 
    switch (cards[1]) {
        case 1:
        case 11:
            displayCard[1].style.background = 'url(Ace.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
            break;
        case 2:
            displayCard[1].style.background = 'url(CardTwo.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'

            break;        
        case 3:
            displayCard[1].style.background = 'url(CardThree.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                break;  
        case 4:
            displayCard[1].style.background = 'url(CardFour.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                            break; 
        case 5:
            displayCard[1].style.background = 'url(CardFive.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                                break;                         
        case 6:
            displayCard[1].style.background = 'url(CardSix.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                    break;
        case 7:
            displayCard[1].style.background = 'url(CardSeven.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                    break;         
        case 8:
            displayCard[1].style.background = 'url(CardEight.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                     break;         
         case 9:
            displayCard[1].style.background = 'url(CardNine.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                     break;  
        case 10:
            displayCard[1].style.background = 'url(CardTen.png) no-repeat'
            displayCard[1].style.backgroundSize = 'contain'
            displayCard[1].style.backgroundPosition = 'center'
                break;  
        default:
            console.log('not found')
            break;
    }
}
function thirdCardDisplay () { 
    switch (cards[2]) {
        case 1:
        case 11:
            displayCard[2].style.background = 'url(Ace.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
            break;
        case 2:
            displayCard[2].style.background = 'url(CardTwo.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'

            break;        
        case 3:
            displayCard[2].style.background = 'url(CardThree.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                break;  
        case 4:
            displayCard[2].style.background = 'url(CardFour.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                            break; 
        case 5:
            displayCard[2].style.background = 'url(CardFive.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                                break;                         
        case 6:
            displayCard[2].style.background = 'url(CardSix.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                    break;
        case 7:
            displayCard[2].style.background = 'url(CardSeven.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                    break;         
        case 8:
            displayCard[2].style.background = 'url(CardEight.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                     break;         
         case 9:
            displayCard[2].style.background = 'url(/CardNine.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                     break;  
        case 10:
            displayCard[2].style.background = 'url(CardTen.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
                break;  
        default:
            displayCard[2].style.background = 'url(pngtree-four-ace.png) no-repeat'
            displayCard[2].style.backgroundSize = 'contain'
            displayCard[2].style.backgroundPosition = 'center'
            break;
    }
}
function fourthCardDisplay () { 
    switch (cards[3]) {
        case 1:
        case 11:
            displayCard[3].style.background = 'url(Ace.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
            break;
        case 2:
            displayCard[3].style.background = 'url(CardTwo.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'

            break;        
        case 3:
            displayCard[3].style.background = 'url(CardThree.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                break;  
        case 4:
            displayCard[3].style.background = 'url(CardFour.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                            break; 
        case 5:
            displayCard[3].style.background = 'url(CardFive.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                                break;                         
        case 6:
            displayCard[3].style.background = 'url(CardSix.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                    break;
        case 7:
            displayCard[3].style.background = 'url(CardSeven.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                    break;         
        case 8:
            displayCard[3].style.background = 'url(CardEight.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                     break;         
         case 9:
            displayCard[3].style.background = 'url(CardNine.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                     break;  
        case 10:
            displayCard[3].style.background = 'url(CardTen.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
                break;  
        default:
            displayCard[3].style.background = 'url(pngtree-four-ace.png) no-repeat'
            displayCard[3].style.backgroundSize = 'contain'
            displayCard[3].style.backgroundPosition = 'center'
            break;
    }
}
function fifthCardDisplay () { 
    switch (cards[4]) {
        case 1:
        case 11:
            displayCard[4].style.background = 'url(Ace.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
            break;
        case 2:
            displayCard[4].style.background = 'url(CardTwo.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'

            break;        
        case 3:
            displayCard[4].style.background = 'url(CardThree.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                break;  
        case 4:
            displayCard[4].style.background = 'url(CardFour.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                            break; 
        case 5:
            displayCard[4].style.background = 'url(CardFive.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                                break;                         
        case 6:
            displayCard[4].style.background = 'url(CardSix.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                    break;
        case 7:
            displayCard[4].style.background = 'url(CardSeven.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                    break;         
        case 8:
            displayCard[4].style.background = 'url(CardEight.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                     break;         
         case 9:
            displayCard[4].style.background = 'url(CardNine.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                     break;  
        case 10:
            displayCard[4].style.background = 'url(CardTen.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
                break;  
        default:
            displayCard[4].style.background = 'url(pngtree-four-ace.png) no-repeat'
            displayCard[4].style.backgroundSize = 'contain'
            displayCard[4].style.backgroundPosition = 'center'
            break;
    }
}
function sixthCardDisplay () { 
    switch (cards[5]) {
        case 11:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(Ace.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
            break;
        case 2:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardTwo.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
            break;        
        case 3:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardThree.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                break;  
        case 4:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardFour.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                  break; 
        case 5:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardFive.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                                break;                         
        case 6:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardSix.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                    break;
        case 7:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardSeven.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                    break;         
        case 8:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardEight.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                     break;         
         case 9:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardNine.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                     break;  
        case 10:
            displayCard[5].style.display ='inline' 
            displayCard[5].style.background = 'url(CardTen.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
                break;  
        default:
            displayCard[5].style.display ='none' 
            displayCard[5].style.background = 'url(pngtree-four-ace.png) no-repeat'
            displayCard[5].style.backgroundSize = 'contain'
            displayCard[5].style.backgroundPosition = 'center'
            break;
    }
}
function defaultCardView(){
    displayCard[3].style.background = 'url(pngtree-four-ace.png) no-repeat'
    displayCard[3].style.backgroundSize = 'contain'
    displayCard[3].style.backgroundPosition = 'center'
    displayCard[2].style.background = 'url(pngtree-four-ace.png) no-repeat'
    displayCard[2].style.backgroundSize = 'contain'
    displayCard[2].style.backgroundPosition = 'center'
    displayCard[4].style.background = 'url(pngtree-four-ace.png) no-repeat'
    displayCard[4].style.backgroundSize = 'contain'
    displayCard[4].style.backgroundPosition = 'center'
    displayCard[5].style.background = 'url(pngtree-four-ace.png) no-repeat'
    displayCard[5].style.backgroundSize = 'contain'
    displayCard[5].style.backgroundPosition = 'center'
}
alert(`Welcome ${player.name} ! 
each round costs $5 
if you get blackjack you win $100
losing cost $10
Goodluck!`)
function startGame(){ 
   balance = balance - 5
    playerEl.textContent = player.name + ": $" + balance
    console.log(balance)
    let firstCard = randomcard()
    let secondCard = randomcard()
     cards = [ firstCard,secondCard]
     sum = firstCard + secondCard
    let isAlive = true
    if (balance < 5) {
        alert('Your balance is too low to stake you will be restarted to continue')
        location.reload()
    }
    renderGame()
    firstCardDisplay()
    secondCardDisplay()
    defaultCardView()
}



function renderGame(){
    sumEl.textContent = "sum: " + sum ;
    cardEl.textContent = "Card: ";
    
    for (let i = 0; i < cards.length; i++) {
      
        cardEl.textContent  +=  cards[i] + "/ "
    }
        if (sum <= 20 ){
        message = "Do you want to draw a new card ?"
        isAlive = true
        hasBlackJack = false
    }   else if ( sum === 21 ){
        message = " You've got Blackjack !"
        hasBlackJack = true
        isAlive = true
    }   else
     {
        message =" You are out of the game !"
        isAlive = false
        hasBlackJack=false
        
    }
    if (hasBlackJack === false && isAlive === false ){
    lose()
    playerEl.textContent = player.name + ": $" + balance
    } 
    else if (hasBlackJack === true && isAlive === true){
      win()
      playerEl.textContent = player.name + ": $" + balance
    }

     messageEl.textContent = message
       

}





function newCard(){
    if (isAlive === true && hasBlackJack === false) {
   let newCar = randomcard()
   sum += newCar
   cards.push(newCar)
     renderGame()
    }
    sumEl.textContent = "sum: " + sum
  thirdCardDisplay()
  fourthCardDisplay()
  fifthCardDisplay()
  sixthCardDisplay()
    
}


  








