import React from 'react'
import './HeaderOutput.css';

const HeaderOutput = (props) => {
    return (
        <div className="headerOutput">
            <div>{'Counter Value = '+props.value} </div>
        </div>
    );
};

export default HeaderOutput