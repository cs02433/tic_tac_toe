import React from 'react';
import { Component } from 'react'
import './tictactoe.css'

class TictactoeView extends Component {

    render() {
        return <div className='container' onClick={this.props.onClick}>
            <div> <h1>Tic Tac Toe</h1> </div>
            <div> <h1>Current Player : {this.props.player}</h1> </div>
            <div className="wrapper">
                <div  className="one" data-x="0" data-y="0"><h1 data-x="0" data-y="0">{this.props.matrix[0][0]}</h1></div>
                <div  className="two" data-x="0" data-y="1"><h1 data-x="0" data-y="1">{this.props.matrix[0][1]}</h1></div>
                <div  className="three" data-x="0" data-y="2"><h1 data-x="0" data-y="2">{this.props.matrix[0][2]}</h1></div>
                <div  className="four" data-x="1" data-y="0"><h1 data-x="1" data-y="0">{this.props.matrix[1][0]}</h1></div>
                <div  className="five" data-x="1" data-y="1"><h1 data-x="1" data-y="1">{this.props.matrix[1][1]}</h1></div>
                <div  className="six" data-x="1" data-y="2"><h1 data-x="1" data-y="2">{this.props.matrix[1][2]}</h1></div>
                <div  className="seven" data-x="2" data-y="0"><h1 data-x="2" data-y="0">{this.props.matrix[2][0]}</h1></div>
                <div  className="eight" data-x="2" data-y="1"><h1 data-x="2" data-y="1">{this.props.matrix[2][1]}</h1></div>
                <div  className="nine" data-x="2" data-y="2"><h1 data-x="2" data-y="2">{this.props.matrix[2][2]}</h1></div>
            </div>
              <div> <h1>Winner:{this.props.winner}</h1> </div>
              <div> <h1><input  value={this.props.gameStatus}/></h1> </div>
        </div>
    }

}

export default TictactoeView