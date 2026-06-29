
// VARIABLES & DATATYPES
// 1.Declare a variable called name and store your name in it.

const name = "Hamphrey";

// 2.Store your age in a variable and print it.

let age = 20;
console.log(age);

//3.Create variables for length and width and calculate the area of a rectangle.

let length = 5, width = 2;
let area = length * width;
//console.log(area);

//4.Store two numbers and print their sum.

let num1 = 5;
let num2 = 4;
let sum = num1 + num2;
//console.log(sum);

//5.Store your favorite color and print a sentence using it.

const favouriteColor = "navy-blue";

console.log(`When I see a ${favouriteColor} isuzu SUV I go nuts, its just the perfect combination.`)

//6.Create variables for first name and last name and combine them.

const firstName = "Hanzo";
const lastName = "Hasashi";

const fullname = firstName + " " + lastName
//console.log(fullname);

//7.Find the remainder when 17 is divided by 3.

let remainder = 17%3;
//console.log(remainder);

//8.Convert a string "25" into a number.

let string = "25";
let num = parseInt(string); // Or let num = Number(string)
//console.log(num, typeof(num))


//9.Swap the values of two variables.

let x = 5;
let y = 4;
let swap = x;

x = y;
y = swap;
//console.log(x,y,swap)

//10.Calculate the average of three numbers.
let num4 = 4;
let num5 = 6;
let num6 = 8;
average = num4 + num5 + num6 / 3;
console.log(average);

// INPUT & OUTPUT

//11. Ask the user for their name and greet them.

let username = prompt("What's your name newbie?");
//console.log(username);
alert("Nice to meet you " + username +".");

//12.Ask for two numbers and display their sum.

let number1 = Number(prompt("Enter your 1st number"));
let number2 = Number(prompt("Enter you 2nd number"));
let sum1 = alert("Sum: " + number1 + number2)
//console.log(number1 + number2);

//13.Ask for a person's age and display it

let userAge = parseInt(prompt("What's your age user?")), response = alert("You are " + userAge + "years old. Got it!");
//console.log(userAge);

//14.Ask for a temperature in Celsius and convert it to Fahrenheit.

let celcius = Number(prompt("What is the temperature in Degrees celcius?")), fahren = (celcius * 9/5) + 32;
alert("Fahrenheit temperature is: " + fahren);
console.log(fahren);

//15.Ask for a number and display its square.
let numSqre = Number(prompt("Enter number to get the Square"));
let sqre = numSqre*numSqre;
alert("Your square is: " + sqre);


//3. CONDITIONAL STATEMENTS

//16.Determine whether user number is positive or negative.

let num7 = Number(prompt("Enter positive or negative number"));

if (num7 < 0){
    alert("Yournumber is a Negative");
}
else if(num7 >=0){
    alert("Your number is a Positive");
}
else{
    alert("Invalid number try again!");
}

//17.Determine whether a number is even or odd.

let num8 = Number(prompt("What's your number?"));

if (isNaN(num8)){
    alert("invalid number try again");
}
else{
    alert(num8 % 2 === 0 ? "Your Number is Even!":"Your Number is Odd!");
} //You can use else if then else but this is shorter 

//18.Compare two numbers and print the larger one.

let a = Number(prompt("Enter 1st number:")), b = Number(prompt("Enter 2nd number:"));
if(isNaN(a && b)){
    alert("Invalid number, try again");
}else{
    alert(a>b ? "Greater number is: " + a : "Greater number is: " + b );
}

//19.Check whether a person is eligible to vote (18+).

let myAge = Number(prompt("Enter your age?"));

if(isNaN(myAge)){
    alert("That's not right, try again");
}
else {
    alert(myAge >= 18? "You can Vote" : "You're too young to vote");
}


//20.Determine whether a student passed (50 or above).

let mark = Number(prompt("Enter your mark"));

if(isNaN(mark)){
    alert("That's not right, try again");
}
else {
    alert(mark>=50? "You passed" : "You failed");
}

//21Check whether a year is a leap year.

let year = Number(prompt("Enter your year:"));
// alert(isNaN(year)? "The year is invalid": alert(year % 4 === 0? "The year is a leap year" : "The year is not a leap year"));

if(isNaN(year)){
    alert("The year is invalid")
}
else{
    alert(year % 4 === 0? "The year is a leap year" : "The year is not a leap year");
} 

// 22.Determine whether a number is divisible by 5.

let numByFive = Number(prompt("Enter your number:"));

switch(true){
    case(isNaN):
        alert("The number is invalid");
        break;
    case(numByFive % 5 === 0):
        alert("The number is Divisible by 5")
        break;
    case(numByFive % 5 !==0):
        alert("The number is not divisible by 5");
        break;
    }

    // 23 Conditionals:
let score = Number(prompt("Enter your score:"));
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else console.log("Fail");



// 24 Conditionals:
let char = 'a';
if ('aeiou'.includes(char.toLowerCase())) {
console.log("Vowel"
)};

// 25 Conditionals:
let s1 = 3, s2 = 4, s3 = 5;
if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1)
    { console.log("Triangle")};

// 26 Logical:
if (num >= 1 && num <= 100)
    { console.log("In range")};


// 27 Logical:
if (username === "admin" && password === "123") {
    console.log("Logged in");
} else {
    console.log("Login failed");
}

// 28 Logical:
let hasID = true;
if (age >= 18 && hasID === true) {
    console.log("Qualified");
} else {
    console.log("Not qualified");
}

// 29 Logical:
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by 3 and 5");
} else {
    console.log("Not divisible by both");
}

// 30 Logical:
if (year % 100 === 0) {
    console.log("Century year");
} else {
    console.log("Not a century year");
}




