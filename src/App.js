import React, {Component} from 'react';
import './App.css';
/*
import {Assignment2} from './Assignment2/Assignment2';
import {Assignment1} from './Assignemnt1/Assignment1';
*/
import Counter from './Counter/Counter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h3>React Application</h3>
                <Counter/>
            </div>
        );
    }
}

export default App;