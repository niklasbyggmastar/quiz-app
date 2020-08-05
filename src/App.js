import React from 'react';
import Header from "./components/Header";
import Question from "./components/Question";
import AnswerBox from "./components/AnswerBox";
import myJson from "./assets/qna.json"
import "./App.scss";
import { ProgressBar } from 'react-bootstrap';
import GameOver from './components/GameOver';

class App extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			qaList: myJson,
			question: "",
			options: [],
			correctAnswer: "",
			showIndicator: false,
			isCorrect: null,
			score: 0,
			round: 0,
			progress: 0,
			disabledBtns: false
		}

		this.checkAnswer = this.checkAnswer.bind(this);
		this.restart = this.restart.bind(this);
	}

	componentDidMount() {
		this.shuffleArray(this.state.qaList);
		this.getQuestion();
		console.log(this.state.qaList);
	}

	checkAnswer(answer) {
		this.setState({ round: this.state.round + 1, disabledBtns: true }, () => {
			this.setState({ progress: Math.ceil((this.state.round/this.state.qaList.length)*100) });
			if (answer === this.state.correctAnswerIndex) {
				this.setState({ score: this.state.score + 1 });
			}
			this.setState({ isCorrect: answer === this.state.correctAnswerIndex, showIndicator: true });
			
			if (this.state.round < this.state.qaList.length) {
				this.nextQuestion();
			}
		});
	}

	nextQuestion() {
		setTimeout(() => {
			this.getQuestion();
			this.setState({ isCorrect: null, showIndicator: false, disabledBtns: false });
			document.activeElement.blur();
		}, 1500);
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

	restart() {
		this.setState({
			showIndicator: false,
			isCorrect: null,
			score: 0,
			round: 0,
			progress: 0,
			disabledBtns: false
		});
	}

	render() {
		return (
			<div className="main">
				<Header gameOver={this.state.round === this.state.qaList.length} />

				{this.state.round === this.state.qaList.length ? (
					<GameOver score={this.state.score} restart={this.restart} />
				) : (
					<div>
						<Question value={this.state.question} />
						<AnswerBox 
							options={this.state.options} 
							correctAnswerIndex={this.state.correctAnswerIndex} 
							checkAnswer={this.checkAnswer}
							showIndicator={this.state.showIndicator}
							disabledBtns={this.state.disabledBtns} />
						<ProgressBar now={this.state.progress} label={`${this.state.progress}%`} variant={this.state.progress == 100 ? "success": ""} />
					</div>
				)}
			</div>
		);
	}
}

export default App;
