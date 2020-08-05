import React from "react";

const Header = ({gameOver}) => {
    return(
        <h1 className="text-center mb-5">
            { gameOver === false ? "Quiz App" : "Game over" }
        </h1>
    )
}

export default Header;