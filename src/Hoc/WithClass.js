import React from 'react';
const WithClass = (Component, classes) => {
    return (props) => {
        return (
            <div className={classes}>
                <Component {...props}/>
            </div>
        )
    }
};

export default WithClass;