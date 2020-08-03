import React from "react";
import AnswerBtn from "./AnswerBtn";

const AnswerBox = ({ options, checkAnswer, correctAnswerIndex, showIndicator }) => {

    return (
        <div className="form-group">
            {options.map((val, i) => 
                <AnswerBtn 
                    key={i} 
                    index={i} 
                    text={val} 
                    correctAnswerIndex={correctAnswerIndex} 
                    showIndicator={showIndicator} 
                    checkAnswer={checkAnswer} />
            )}
        </div>
    )

}

export default AnswerBox;