import React from "react";

const AnswerBtn = ({ index, text, checkAnswer, correctAnswerIndex, showIndicator, disabledBtns }) => {
    return (
        <button 
            className={`answerBtn form-control mb-2 
                ${showIndicator === true  && correctAnswerIndex === index ? "correct" : ""}
                ${disabledBtns === true ? "disabled": ""}`}
            type="button"
            onClick={() => checkAnswer(index)}
        >
            { text }
        </button>
    )
}

export default AnswerBtn;