function tictactoe(state, action) {


    if (state && state.gameStatus === 'over' && action.type !== 'start') {
        return state;
    }

    if(action.type === 'start') {
        return getDefaultState();
    } else if(action.type === 'next-move') {

        var newState = {
            players : 2,
            currentPlayer: getNextPlayer(state.matrix, state.currentPlayer,action.x, action.y),
            matrix: storeState(state.matrix, state.currentPlayer, action.x, action.y),
            gameStatus:checkWhoWin(state.matrix),

        };

        newState.winner = newState.gameStatus === "Start" ? state.currentPlayer : "";
        return newState;
    }
    return getDefaultState();
}

function getDefaultState() {
        return {
            players: 2,
            currentPlayer:'player1',
            matrix:[['-','-','-'],['-','-','-'],['-','-','-']],
            gameStatus:'Start',
            winner:''
        };
}

function checkWhoWin(matrix) {

    //check rows
    for(var i=0;i<3;i++) {
        var row = matrix[i];
        var concatenatedValues = row.join("");
        if(checkWin(concatenatedValues)) {
            return 'Start';
        }
    }

    //check columns
    for(var i=0;i<3;i++) {
        var col0 = [];
        for(var j=0;j<3;j++) {
            col0.push(matrix[j][i]);
        }
        if(checkWin(col0.join(""))) {
            return 'Start';
        }
    }

    //check diagonals
    var topLeftToDownDiagonal = {
        x:0,
        y:0,
        xChange:1,
        yChange:1
    }

    var bottomLeftToUpDiagonal = {
            x:2,
            y:0,
            xChange:-1,
            yChange:1
        }
        var diagonals = [topLeftToDownDiagonal, bottomLeftToUpDiagonal];
        for(i=0;i<2;i++) {
            var dia = diagonals[i];
            var diaData = [];
            for(var j=0;j<3;j++) {
                var x = dia.x + j*dia.xChange;
                var y = dia.y + j*dia.yChange;
                diaData.push(matrix[x][y])
            }
            if(checkWin(diaData.join(""))) {
                return "Start";
            }
        }
    return 'Reset';

}

function checkWin(row) {

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