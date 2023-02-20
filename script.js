const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const roundDisplay = document.querySelector(".round");



let currentPlayer = "X"
let playerScore = 1
let computerScore = 1
let round = 1
let winningCombination =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 

playerScoreDisplay.innerHTML = playerScore
computerScoreDisplay.innerHTML = computerScore
roundDisplay.innerHTML = round

/*
The forEach() method calls a function for each element in an array.
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

For each element in the array, apply to that element the function called 'combination'
Expressed function - Check every element
*/

function checkForWinner(){
    winningCombination.forEach(function(combination){
        let check = combination.every(index => buttons[index].innerHTML == currentPlayer)
        if (check){
            alert(currentPlayer + " has won")
        }
    })
}

function combination (){}

// querySelectorAll returns a node list. We need to convert it to an array so we can work with it.
let buttons = document.querySelectorAll(".btn")
buttons = Array.from(buttons)
console.log(buttons)


/*
The forEach() method calls a function for each element in an array. 

For each element in the array, apply to that element the function called 'button'
'button' is an event listener. When clicked, several things happen

1. we assign the variable currentPlayer (It's value is "x") to the button's HTML in the DOM
2. If the button's value is not empty, then return whatever the assigned value is. This stops you for assigning a new value to the gameboard once a gameboard button has been clicked.
3. If the player is "X", then the next entry is "o" (And vice Versa)
4. Call the function "checkForWinner"
*/


buttons.forEach(function(button){
    button.addEventListener("click", function(){
        if (button.innerHTML != ""){
            return
        } 
        else if (currentPlayer == "X"){
            (currentPlayer = "O")
            button.innerHTML = currentPlayer
        } else {
            currentPlayer = "X"
            button.innerHTML = currentPlayer
        }
        checkForWinner()
    })
})
