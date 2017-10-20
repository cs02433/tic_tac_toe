import React from 'react';
import ReactDOM from 'react-dom';
import tictactoe from './tictactoe';
import { createStore } from 'redux';
import TictactoeView from './TictactoeView';
import registerServiceWorker from './registerServiceWorker';

var reducer = createStore(tictactoe);

function onClick(e) {
    var input = e.target;
    var x = input.getAttribute('data-x');
    var y = input.getAttribute('data-y');

    var value = input.innerHTML;

    if(!x || !y) {
    reducer.dispatch({
                type:'start'
            });


    } else {
    reducer.dispatch({
            x:x,
            y:y,
            type:'next-move'
        });
    }

}


function render() {
    ReactDOM.render(<TictactoeView matrix={reducer.getState().matrix}
    player={reducer.getState().currentPlayer}
    winner={reducer.getState().winner}
    gameStatus={reducer.getState().gameStatus}
    onClick={onClick}/>, document.getElementById('root'));

}

reducer.subscribe(render);
render();

registerServiceWorker();
