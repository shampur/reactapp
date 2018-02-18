import React from 'react';

function Validate(props) {
    let message;
    if (props.text.length < 6) {
        message = (<h5>Text too short</h5>);
    } else {
        message = (<h5>Text long enough</h5>);
    }
    return (
        <div>
            {message}
        </div>
    );
}


export {Validate};