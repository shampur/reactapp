import React from 'react';
import Aux from '../Hoc/Aux';
import WithClass from '../Hoc/WithClass';
import propTypes from 'prop-types';

function Validate(props) {
    let message;
    if (props.text.length < 6) {
        message = (<h5>Text too short</h5>);
    } else {
        message = (<h5>Text long enough</h5>);
    }
    return (
        <Aux>
            {message}
        </Aux>
    );
}

Validate.propTypes = {
    text: propTypes.string
};


export default WithClass(Validate, 'dummy');