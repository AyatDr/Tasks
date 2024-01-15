let registrationEarly = true; // or false, depending on the condition

let runnerAge = 18; // we can change this number to test different age conditions

let raceNumber = Math.floor(Math.random() * 1000);

// Adding 1000 to race number if runner is adult and registered early
if (runnerAge > 18 && registrationEarly) {
    raceNumber += 1000;
}

// Determining race time to the runners over 18 who registered early
if (runnerAge > 18 && registrationEarly) 
    console.log(`You will race at 9:30 am. Your race number is: ${raceNumber}.`);
// Late adults run at 11:00 am
else if (runnerAge > 18 && !registrationEarly)
console.log(`You will race at 11:00 am. Your race number is: ${raceNumber}.`);
//runner that is under 18
else if  (runnerAge < 18 ) 
    console.log(`You will race at 12:30 pm. Your race number is: ${raceNumber}.`);

// runners exactly 18 years old
else 
console.log("Please see the registration desk.");