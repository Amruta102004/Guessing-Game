const max = prompt("Enter the Max Number : ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number : ");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == random){
        console.log("You are right! random number was : ", random);
        break;
    }
    // else{
    //     guess = prompt("Your guess was wrong. Please try again");
    // }
    else if(guess < random){
        guess = prompt("Hint : Your guess was too small. Please try again");
    }
    else{
         guess = prompt("Hint : Your guess was too large. Please try again");
    }
}