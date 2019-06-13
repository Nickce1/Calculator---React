import React from 'react'

const buttons = props => {
    const numbers = ["(", "CE", ")", "C", 7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", '.', 0, "=", "/"];

    return (
        <div className="buttons">
            {numbers.map(x => <button className="button" onClick={props.clicked}>{x}</button>)}
        </div>
    )
}

export default buttons