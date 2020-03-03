import React, { Component } from 'react';
import { computerMove, assessGame } from './gameLogic'
import rock from './rock.png'
import paper from './paper.png'
import scissors from './scissors.png'

class App extends Component {
	state = {
		playerChoice: '',
		computerChoice: '',
		showMessage: false,
		results: ''
	}

	handleButtonClick(event) {
		debugger
		let playerChoice = event.target.name
		let computerChoice = computerMove()
		this.setState({ playerChoice: playerChoice, computerChoice: computerChoice, showMessage: true, results: assessGame(playerChoice, computerChoice) })
	}

	render() {
		return (
			<>
				<img src={rock} onClick={event => this.handleButtonClick(event)} name="rock" />
				<img src={paper} onClick={event => this.handleButtonClick(event)} name="paper" />
				<img src={scissors} onClick={event => this.handleButtonClick(event)} name="scissors" />
				{this.state.showMessage &&
					<>
						<h3>{`You chose ${this.state.playerChoice}, computer chose ${this.state.computerChoice}`}</h3>
						<h1>{this.state.results}</h1>
					</>
				}
			</>
		);
	}
}

export default App;