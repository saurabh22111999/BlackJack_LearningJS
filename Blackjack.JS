let firstcard=10;
let secondcard=4;
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=true;
let message=""
function startgame(){
    if (sum<=20){
        message="do youwant to drawa new card?"
    }
    else if(sum===21){
        message="woohoo blackjack!"
        hasblackjack=true;

    }else{
        message="you lost"
        isalive=false;
    }
}