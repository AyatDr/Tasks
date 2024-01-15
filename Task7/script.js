// Set the variable 'myAge' to represent the user's age as a number.
const  myAge = 21;
// Initialize 'earlyYears' variable with the value 2, representing the first two years; this value may be altered later in the program.
let earlyYears = 2;

earlyYears*=10.5;

// Subtract 2 from 'myAge' to account for the first two years already considered, and assign the result to 'laterYears' for further calculations.
let laterYears = myAge - 2;

// Multiply 'laterYears' by 4 to convert the remaining human years to dog years, using the multiplication assignment operator.
laterYears *= 4;

//the print  of earlyYears and laterYears to the console

console.log(earlyYears);  // 2*10=21
console.log(laterYears); //19*4=76

// Sum 'earlyYears' and 'laterYears' to calculate the user's age in dog years, and store the result in 'myAgeInDogYears'.
let myAgeInDogYears = earlyYears + laterYears;



// Create a variable 'myName' and store the user's name in all lowercase letters using the .toLowerCase() string method.
const myName = "Ayat".toLowerCase();

// Display a sentence in the console including the user's name in lowercase (stored in 'myName') ,their age in human years (store in myAge) their age in dog years (stored in 'myAgeInDogYears').
console.log(`My name is ${myName} . I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `);