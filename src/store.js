import { createStore } from 'redux'
import tictictoe from './tictactoe'

var store = createStore(tictictoe)

function print(currentState) {
    if(!currentState) {
        return '';
    }
    var matrix = '';
    for(var i in currentState) {
        var row = '[';
        for (var j in currentState[i]) {
            var ele = currentState[i][j];
            row+=ele;
        }
        row+=']';
        matrix+=row;
    }
    return matrix;
}

export default store;