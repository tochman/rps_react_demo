import Chance from 'chance'


const computerMove = () => {
	let chance = new Chance()
	let choice = chance.pickone(['rock', 'paper', 'scissors'])
	return choice
}

const assessGame = (player1, player2) => {

	let result
	switch ([player1, player2].join()) {
		case ['rock', 'scissors'].join():
		case ['scissors', 'paper'].join():
		case ['paper', 'rock'].join():
			result = 'You win!'
			break
		case ['scissors', 'rock'].join():
		case ['paper', 'scissors'].join():
		case ['rock', 'paper'].join():
			result = 'Computer wins!'
			break
		default:
			result = "It's a DRAW!"
			break
	}

	return result
}


export { computerMove, assessGame }