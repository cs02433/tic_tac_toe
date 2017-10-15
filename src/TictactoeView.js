import React from 'react';
import { Component } from 'react'
import './tictactoe.css'

class TictactoeView extends Component {

    render() {
        return <div className='container' onClick={this.props.onClick}>
            <div> <h1>Tic Tac Toe</h1> </div>
            <div> <h1>Current Player : {this.props.player}</h1> </div>
            <div>
                <input type="button" data-x="0" data-y="0" value={this.props.matrix[0][0]}/>
                <input type="button" data-x="0" data-y="1"  value={this.props.matrix[0][1]}/>
                <input type="button" data-x="0" data-y="2"  value={this.props.matrix[0][2]}/> </div>
            <div>
                <input type="button" data-x="1" data-y="0"  value={this.props.matrix[1][0]}/>
                <input type="button" data-x="1" data-y="1"  value={this.props.matrix[1][1]}/>
                <input type="button" data-x="1" data-y="2"  value={this.props.matrix[1][2]}/>
            </div>
            <div>
                <input type="button" data-x="2" data-y="0"  value={this.props.matrix[2][0]}/>
                <input type="button" data-x="2" data-y="1"  value={this.props.matrix[2][1]}/>
                <input type="button" data-x="2" data-y="2"  value={this.props.matrix[2][2]}/>
            </div>
              <div> <h1>Winner:{this.props.winner}</h1> </div>
              <div> <h1><input type="button" value={this.props.gameStatus}/></h1> </div>
        </div>
    }

}

export default TictactoeView