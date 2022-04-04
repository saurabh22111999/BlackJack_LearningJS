let firstcard=10;
let secondcard=11;
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=true;
let message=""
let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")//css selectors
let cardEl=document.querySelector("#card-el")
console.log(messageEl)
function startgame(){
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
    cardEl.textContent="Cards: "+firstcard+" "+secondcard;
} 
function NewCard(){
    console.log("newcard");
}