function tictactoe(state, action) {


    if (state && state.gameStatus === 'over' && action.type !== 'start') {
        return state;
    }


    if(action.type === 'start') {
        return {
            players: 2,
            currentPlayer:'player1',
            matrix:[['-','-','-'],['-','-','-'],['-','-','-']],
            gameStatus:'running',
            winner:''
        }
    } else if(action.type === 'next-move') {

        return {
            players : 2,
            currentPlayer: getNextPlayer(state.matrix, state.currentPlayer,action.x, action.y),
            matrix: storeState(state.matrix, state.currentPlayer, action.x, action.y),
            gameStatus:checkWhoWin(state.matrix),
            winner:'player2'
        };
    }
    return {
         players: 2,
         currentPlayer:'player1',
         matrix:[['-','-','-'],['-','-','-'],['-','-','-']],
         gameStatus:'running',
         winner:''
    };
}

function checkWhoWin(matrix) {

    var row0 = matrix[0];
    var row1 = matrix[1];
    var row2 = matrix[2];

    var col0 = [];
    col0.push(row0[0]);
    col0.push(row1[0]);
    col0.push(row2[0]);


    var col1 = [];
    col1.push(row0[1]);
    col1.push(row1[1]);
    col1.push(row2[1]);



    var col2 = [];
    col2.push(row0[2]);
    col2.push(row1[2]);
    col2.push(row2[2]);


   var dia1 = [];
    dia1.push(row0[0]);
    dia1.push(row1[1]);
    dia1.push(row2[2]);


   var dia2 = [];
    dia2.push(row0[2]);
    dia2.push(row1[1]);
    dia2.push(row2[0]);


    if(checkRow(row0) || checkRow(row1) || checkRow(row2)) {
        return 'over';
    }

    if(checkRow(col0) || checkRow(col1) || checkRow(col2)) {
            return 'over';
        }


    if(checkRow(dia1) || checkRow(dia2)) {
            return 'over';
        }

    return 'running';

}

function checkRow(rowArr) {
    var row = rowArr[0]+rowArr[1]+rowArr[2];
    if(row === '000' || row === 'XXX') {
        return true;

    }
    return false;
}


function storeState(currentMatrix, player, x=0, y=0) {

    var symbol = player === 'player1' ? "X" : "0";
    if(currentMatrix[x][y] === 'X' || currentMatrix[x][y] === '0') {
        return currentMatrix;
    }
    currentMatrix[x][y] = symbol;
    return currentMatrix;
}

function getNextPlayer(currentMatrix, currentPlayer, x=0, y=0) {
    if(currentMatrix[x][y] === 'X' || currentMatrix[x][y]==='0') {
        return currentPlayer;
    }

    return currentPlayer === 'player1' ? 'player2' : 'player1';

}

export default tictactoe;