const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Invalid Input');
  } 
}

const getComputerChoice = () => {
  numberChoice = Math.floor(Math.random() * 3);

  switch (numberChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;    
  }
}


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User has won!';
  }

  if (userChoice === computerChoice) {
    return 'This game is a tie';
  } 

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer has won!';
    } else {
      return 'User has won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer has won!';
    } else {
      return 'User has won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer has won!';
    } else {
      return 'User has won!';
    }
  }
}


const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  
  console.log(`User's choice: ${userChoice} \nComputer's choice: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();










