// 1. FizzBuzz (1–100)


for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }

}
/********************************************************************** */

// 2. Number Guessing Game
let secretNumber = 7;
let guess = 10;

if (guess > secretNumber) {
    console.log("Too High");
}

else if (guess < secretNumber) {
    console.log("Too Low");
}

else {
    console.log("Correct! You guessed the number.");
}


/********************************************************************** */
