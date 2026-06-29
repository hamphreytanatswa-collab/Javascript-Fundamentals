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

// 3. Reverse an Array (Without .reverse())
let numbers = [3, 6, 9, 12, 15];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
/********************************************************************** */
// 4. Count Even Numbers in an Array

let nums = [5, 2, 7, 8, 12, 15, 18, 25];

let count = 0;

for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 2 === 0) {
        count++;
    }

}

console.log("Even numbers:", count);

/********************************************************************** */

// 5. Find the Smallest Number

let num = [12, 5, 30, 2, 18, 1, 40];

let smallest = num[0];

for (let i = 1; i < num.length; i++) {

    if (num[i] < smallest) {
        smallest = num[i];
    }

}

console.log("Smallest number:", smallest);

/********************************************************************** */

// 6. Remove Duplicates from an Array

let duplicates = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6];

let unique = [];

for (let i = 0; i < duplicates.length; i++) {

    if (!unique.includes(duplicates[i])) {
        unique.push(duplicates[i]);
    }

}

console.log(unique);

/********************************************************************** */

// 7. Find the Second Largest Number

let secMax = [7, 20, 15, 40, 12, 35];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < secMax.length; i++) {

    if (secMax[i] > largest) {

        secondLargest = largest;
        largest = secMax[i];

    }

    else if (secMax[i] > secondLargest && secMax[i] !== largest) {

        secondLargest = secMax[i];

    }

}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);

/********************************************************************** */

// Bonus Challenge 8 – Find the Largest Number

let maxNum = [12, 50, 7, 90, 35, 20];

let lrgest = maxNum[0];

for (let i = 1; i < maxNum.length; i++) {

    if (maxNum[i] > largest) {
        lrgest = maxNum[i];
    }

}

console.log("Largest number:", lrgest);