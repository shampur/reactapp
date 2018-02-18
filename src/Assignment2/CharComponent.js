import React from 'react';

export function CharComponent(props) {
    return (
        <div style={charCompStyle}>
            <div>{props.char}</div>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}

let charCompStyle = {
    display: 'inline-block',
    padding: '10px',
    textAlign: 'center',
    margin: '10px',
    border: '1px solid dodgerblue',
    borderRadius: '10px'
};