//global variables
const clearButton = document.getElementById('clearButton')
const tiles = document.querySelectorAll('.tile')
const playerName = document.getElementById('playerName')
const player2Name = document.getElementById('player2Name')
const submitButton = document.getElementById('submitButton')
let myPlayers = []

//start message
function startMessage() {
    console.log('Please enter your names and press submit to begin the game.')
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
    console.log(`Player One: ${player1}`)
    console.log(`Player Two: ${player2}`)
    console.log(`${player1} will go first, please select your first tile to begin!`)
}

let i = 0

//function to click a tile
function clickTile(){
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (i >= 9) {
                console.log('GAME OVER')
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
        })
    })
}

//play round function
function playRound() {
    startMessage()
    clickTile()
    if(i > 9) {
        console.log('GAME OVER')
    }
}


function resetGame() {
    console.clear()
    let form = document.getElementById('form')
    form.reset()
    tiles.forEach(tile => {
        tile.textContent = ''
        i = 0
    })
    playRound()
}

playRound()

