//global variables
const clearButton = document.getElementById('clearButton')
const tiles = document.querySelectorAll('.tile')
const playerName = document.getElementById('playerName')
const player2Name = document.getElementById('player2Name')
const submitButton = document.getElementById('submitButton')
let messageBox = document.getElementById('message-box')
let nameBox1 = document.getElementById('player1mes')
let nameBox2 = document.getElementById('player2mes')
let winBox = document.createElement('div')
let myPlayers = []

//start message
function startMessage() {
    messageBox.textContent = 'Please enter your names and press submit to begin the game.'
}

//function to clear the board
function clearBoard() {
    tiles.forEach(tile => {
        tile.textContent = ''
        i = 0
    })
    startMessage()
}

//function to create a player object
function createPlayer(name, content) {
    return {
        name,
        content,
        printName(){
            console.log(`player: ${name}, symbol: ${content}`)
        },
    }
}

//function to create a player one object
function createPlayers() {
    //player 1 info
    let player1 = playerName.value
    let content1 = 'X'
    let playerOne = new createPlayer(player1, content1)
    myPlayers.push(playerOne)

    //player 2 info
    let player2 = player2Name.value
    let content2 = 'O'
    let playerTwo = new createPlayer(player2, content2)
    myPlayers.push(playerTwo)    

    //game starting message
    nameBox1.textContent = `Player One: ${player1}`
    nameBox2.textContent = `Player Two: ${player2}`
    messageBox.textContent = `${player1} will go first, please select your first tile to begin!`
}

let i = 0

//function to click a tile
function clickTile(){
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (i >= 9) {
               winBox.classList.add('win-box')
               document.body.append(winBox)
               winBox.textContent = 'GAME OVER its a tie!'
                        } //logic to prevent clicking on an already clicked tile
            else if (tile.textContent === 'O' || tile.textContent === 'X') {
                i = i
            }
             else if(i % 2 === 0) {
                tile.textContent = 'X'
                i++
                console.log(i)
            }
             else if (i % 2 != 0) {
                tile.textContent = 'O'
                i++
            console.log(i)
            } 
            checkWinner()
        })
    })
}

//play round function
function playRound() {
    startMessage()
    clickTile()
}


function resetGame() {
    console.clear()
    let form = document.getElementById('form')
    form.reset()
    tiles.forEach(tile => {
        tile.textContent = ''
        i = 0
    })
    nameBox1.textContent = ''
    nameBox2.textContent = ''
    winBox.remove()
    playRound()
}

playRound()

// LOGIC TO CHECK FOR A WINNER
let tile1 = document.getElementById("cb1");
let tile2 = document.getElementById("cb2");
let tile3 = document.getElementById("cb3");
let tile4 = document.getElementById("cb4");
let tile5 = document.getElementById("cb5");
let tile6 = document.getElementById("cb6");
let tile7 = document.getElementById("cb7");
let tile8 = document.getElementById("cb8");
let tile9 = document.getElementById("cb9");




function checkWinner() {
    if (tile1.textContent === "X" && tile2.textContent === "X" && tile3.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile4.textContent === "X" && tile5.textContent === "X" && tile6.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile7.textContent === "X" && tile8.textContent === "X" && tile9.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile1.textContent === "X" && tile4.textContent === "X" && tile7.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile2.textContent === "X" && tile5.textContent === "X" && tile8.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile3.textContent === "X" && tile6.textContent === "X" && tile9.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile1.textContent === "X" && tile5.textContent === "X" && tile9.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile3.textContent === "X" && tile5.textContent === "X" && tile7.textContent === "X") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${playerName.value} has won.`
    } else if (tile1.textContent === "O" && tile2.textContent === "O" && tile3.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`  
    } else if (tile4.textContent === "O" && tile5.textContent === "O" && tile6.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`
    } else if (tile7.textContent === "O" && tile8.textContent === "O" && tile9.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`
    } else if (tile1.textContent === "O" && tile4.textContent === "O" && tile7.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`
    } else if (tile2.textContent === "O" && tile5.textContent === "O" && tile8.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`
    } else if (tile3.textContent === "O" && tile6.textContent === "O" && tile9.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`
    } else if (tile1.textContent === "O" && tile5.textContent === "O" && tile9.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`
    } else if (tile3.textContent === "O" && tile5.textContent === "O" && tile7.textContent === "O") {
        winBox.classList.add('win-box')
        document.body.append(winBox)
        winBox.textContent =`GAME OVER, ${player2Name.value} has won.`
    }
}