// Define a variable 'userName' that can be set to the user's name. Initially, it is an empty string.
let userName = "Ayat";
// Check if 'userName' has a value and log a personalized greeting if it does; otherwise, log a general greeting.
userName!=""?console.log(`Hello, ${userName}!`):console.log(`Hello!`);

// Declare a variable 'userQuestion' to store the question asked to the Magic Eight Ball.
let userQuestion = "Will I travel to another country this year?";

console.log(`The question of ${userName ? userName : " the user"} is : '${userQuestion}'`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Initialize a variable 'eightBall' to store the Magic Eight Ball's answer.
let eightBall = '';

//uses a switch statement  to create a control flow that assigns a Magic Eight Ball response to the eightBall variable based on the randomNumber value .
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Error';
        break;
}

console.log(`The Magic Eight Ball says (using switch ): "${eightBall}"`);

//uses multiple if and else if statements to check the value of randomNumber and assign the corresponding Magic Eight Ball phrase to eightBall.

if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
} else {
    eightBall = 'Error';
}

console.log(`The Magic Eight Ball says (using if ): "${eightBall}"`);
