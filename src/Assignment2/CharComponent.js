import React from 'react';
import Radium from 'radium';
import propTypes from 'prop-types';

function CharComponent(props) {
    return (
        <div style={charCompStyle}>
            <div>{props.char}</div>
            <button style={buttonStyle} onClick={props.delete}>Delete</button>
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

let buttonStyle = {
    backgroundColor: '#229ad6',
    color: '#e2e2e2',
    padding: '10px',
    boxShadow: '0px 0px 3px grey',
    borderRadius: '10px',
    border: '1px solid #229ad6',
    ':hover': {
        backgroundColor: '#1d86ba',
        color: '#ffffff',
        cursor: 'pointer'
    },
    ':active': {
        transform: 'translateY(4px)'
    }
};

CharComponent.propTypes = {
    char: propTypes.string,
    delete: propTypes.func
};

export default Radium(CharComponent);