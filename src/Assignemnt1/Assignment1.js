import React from 'react';
import {UserInput} from '../UserInput/UserInput';
import {UserOutput} from '../UserOutput/UserOutput';

export class Assignment1 extends React.Component {
    state = {
        username: ''
    };

    updateUsername (event) {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
            <div>
                <UserInput updateUsername={this.updateUsername.bind(this)}/>
                <UserOutput username={this.state.username}/>
            </div>
        )
    }

}