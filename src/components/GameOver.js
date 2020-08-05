import React from "react";

const GameOver = ({ score, restart }) => {
    return(
        <div>
            <h4>Your score: { score }</h4>
            <button 
                className="btn btn-primary w-75 d-block mx-auto my-4"
                onClick={() => restart()}
            >
                Play again!
            </button>
        </div>
    )
}

export default GameOver;