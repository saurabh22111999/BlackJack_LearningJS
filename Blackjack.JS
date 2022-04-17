let firstcard=getrandomcard();
let secondcard=getrandomcard();
let cards = [];//array-ordered list of items
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=false;
let message=""
let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")//css selectors
let cardEl=document.querySelector("#card-el")
console.log(messageEl)
function startgame(){
    isalive= true
    firstcard=getrandomcard()
    secondcard= getrandomcard()
    cards=[firstcard,secondcard]
    sum= firstcard+secondcard
    rendergame()


}
let player=
{
    name:"jekkey",
    chips:"15"
}
let playerel= getElementById("player-el")
playerel.textContent=[player.name +": $"+ player.chips]
function getrandomcard(){
 let randomnumber= Math.floor(Math.random()*13)+1;
 if(randomnumber==1){
 return 11}
 else if(randomnumber>10){
 return 10}
 else {
     return randomnumber
 }
}
function rendergame(){
    //render out first card and second card
    if (sum<=20){
        message="do you want to drawa new card?"
    }
    else if(sum===21){
        message="woohoo blackjack!"
        hasblackjack=true;

    }else{
        message="you lost"
        isalive=false;
    }
    messageEl.textContent=message;
    sumEl.textContent="Sum: "+ sum;
    cardEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+" "
    }

} 
function NewCard(){
    if (isalive===true && hasblackjack===false){
    let card=getrandomcard()
    sum+=card
    cards.push(card)
    rendergame()}
}