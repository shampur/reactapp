import React from 'react';

export const UserInput = (props) => {
    return (
      <div className="usernameInput">
          <label>Enter Username</label>
          <input id="username" type="text" onChange={props.updateUsername}/>
      </div>
    );
};
