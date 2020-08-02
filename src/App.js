import React from 'react';
import Header from "./components/Header";
import Question from "./components/Question";
import AnswerBox from "./components/AnswerBox";
import ResultIndicator from "./components/ResultIndicator";
import myJson from "./assets/qna.json"
import "./App.scss";

class App extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			qaList: myJson,
			question: "",
			options: [],
			correctAnswer: "",
			showIndicator: false,
			isCorrect: false,
			score: 0,
			round: 0
		}

		this.checkAnswer = this.checkAnswer.bind(this);
	}

	componentDidMount() {
		this.shuffleArray(this.state.qaList);
		this.getQuestion();
		console.log(this.state.qaList);
	}

	checkAnswer(answer) {
		this.setState({ round: this.state.round + 1 }, () => {
			if (this.state.round < this.state.qaList.length) {
				if (answer == this.state.correctAnswerIndex) {
					this.setState({ score: this.state.score + 1 });
				}
				this.setState({ isCorrect: answer == this.state.correctAnswerIndex, showIndicator: true });
				this.nextQuestion();
			} else if (this.state.round == this.state.qaList.length) {
				console.log("GAME OVER");
				alert(`SCORE: ${this.state.score}/${this.state.round}`);
			}
		});
	}

	nextQuestion() {
		setTimeout(() => {
			this.getQuestion();
			this.setState({ isCorrect: false, showIndicator: false });
		}, 2500);
	}
	
	getQuestion() {
		this.setState({
			question: this.state.qaList[this.state.round].question,
			options: this.state.qaList[this.state.round].opt,
			correctAnswerIndex: this.state.qaList[this.state.round].correct,
		});
	}

	shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	render() {
		return (
			<div className="main">
				<Header />
				<Question value={this.state.question} />
				<AnswerBox options={this.state.options} correctAnswerIndex={this.state.correctAnswerIndex} checkAnswer={this.checkAnswer} />
				<ResultIndicator show={this.state.showIndicator} isCorrect={this.state.isCorrect} />
			</div>
		);
	}
}

export default App;
