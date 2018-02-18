import React from 'react';

export function UserOutput(props) {
    return (
        <div className="usernameOutput">
            <p>The entered username =
                {
                    (props.username === 'charan')?
                        <strong>{props.username}
                        </strong>
                    :
                    props.username
                }
            </p>
        </div>
    );
}