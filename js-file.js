let activePlayer;
let board = setupBoard();
//let board = board; 
let rows;
let cols;
let gameState = true;
// set up game - board, players, first move
function setupBoard() {
    const rows = 3;
    const cols = 3;
    const board = [];    

    // create board
    let value = 0;
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = value;
        }
    }
    return board;
};

// create players
const players = [
    {
        name: "Player 1",
        token: 1
    },
    {
        name: "Player 2",
        token: 20
    }
];

// Decide who goes first
function firstMove() {
    const first = Math.floor(Math.random() * 2);
    return activePlayer = players[first];
};

// Check square is empty
function validMove(rows, cols, board) {
    if (board[rows][cols] != 0) {
        console.log("That is not an empty cell");        
    } 
        
    if (board[rows][cols] == 0) {
        board[rows][cols] = activePlayer.token; 
    }       
};

// take turns
function takeTurns(activePlayer) {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
};

// Check for winner
function checkWinner(board) {
    let combo = [
       [board[0][0], board[0][1], board[0][2]],
       [board[1][0], board[1][1], board[1][2]],
       [board[2][0], board[2][1], board[2][2]],
       [board[0][0], board[1][1], board[2][2]],
       [board[0][1], board[1][1], board[2][1]],
       [board[0][2], board[1][1], board[2][0]]
       ];    
    
    let sum = 0;
    combo.forEach((line) => {
        let sum = 0;
        line.forEach((cell) => {
            sum += cell;    
        } )
        
        if (sum == 3) {
           console.log("Player 1 wins!");
           return gameState = false;
        } else if (sum == 60) {
            console.log("Player 2 wins!");
            return gameState = false;
        } else {
            return gameState = true;
        }
})};   

function printBoard(board) {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
 };

 function isSpace(board) {
    // Check if board is an array and if all its elements are arrays.
    if (!Array.isArray(board) || !board.every(Array.isArray)) {
        console.error("Invalid board provided to isSpace function.");
        return;
    }
    let space = 0;
    board.forEach((row) => {
        row.forEach((cell) => {
            if (cell == 0) {
                space++;
            } 
            })
    })
    if (space >= 1){
        console.log("space");
    } else {
        console.log("no");
    } 
 };
setupBoard();
board = [[1, 1, 0], [0, 1, 1], [20, 1, 20]];