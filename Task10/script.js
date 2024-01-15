
// getUserChoice function

const  getUserChoice =userInput => {
    // Convert the user input to lowercase for case-insensitive comparison
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
         // If the input is valid, return the user's choice
      return userInput;
    } else {
        // If the input is not valid, log an error message to the console
      console.log('Error: Please enter rock, paper, or scissors.');
    }

};



// getComputerChoice function

const  getComputerChoice=()=>{
    
let ranNumber = Math.floor((Math.random()*3));

 // Depending on the random number, return 'rock', 'paper', or 'scissors'
switch(ranNumber){
    
    case 0:
        return 'rock';
   
    case 1:
        return 'paper';
     
    case 2:
        return 'scissors';

                 }
};



// determineWinner function

function determineWinner(userChoice,computerChoice){
     
    // Check if the user played the cheat code 'bomb'
      if (userChoice === 'bomb') {
       return 'You won with a secret cheat code!';
      }

    // Check if the game is a tie
    if(userChoice===computerChoice)
    return 'the game was a tie';
    
    // Check if userChoice is 'rock'
    if(userChoice==='rock'){
         if(computerChoice==='paper')
         return 'the computer won';
         else 
         return 'You won';
    }
    
    // Check if userChoice is 'paper'
    if(userChoice==='paper'){
        if(computerChoice==='rock')
        return 'You won';
        else 
        return 'the computer won';
   }

    
   // Check if userChoice is 'scissors'
   if(userChoice==='scissors'){
    if(computerChoice==='rock')
    return 'the computer won';
    else 
    return 'You won';
}


}



const playGame = () => {
    const userChoice = getUserChoice('scissors'); 
    const computerChoice = getComputerChoice(); 
  
    console.log('User choice:', userChoice);
    console.log('Computer choice:', computerChoice);
  
    // Determine the winner and display the result
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game by calling the playGame function
  playGame();

 