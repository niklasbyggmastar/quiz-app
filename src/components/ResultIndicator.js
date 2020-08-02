import React from "react";

const ResultIndicator = ({show, isCorrect}) => {
    if (show === true) {
        return(
            <h4 className="mb-4">
                { isCorrect === true ? "Correct!" : "Wrong" }
            </h4>
        )
    }
    return null;
}

export default ResultIndicator;