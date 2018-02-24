import React from 'react'
import './Button.css';

const Button = (props) => {
    return (
        <div className="button" onClick={props.clicked}>
            {props.label}
        </div>
    );
};

export default Button;