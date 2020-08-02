import React from "react";

const AnswerBox = ({answer, correctAnswerIndex, options, checkAnswer}) => {

    return (
        <div className="form-group">

            {options.map((val, i) => 
                <button key={i} type="button" onClick={() => checkAnswer(i)}>{ val }</button>
            )}

        </div>
    )

}

export default AnswerBox;