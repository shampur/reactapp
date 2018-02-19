import React from 'react';
import Validate from './Validation';
import CharComponent from './CharComponent';

export class Assignment2 extends React.Component {
    state = {
        inputText: ''
    };

    updateInputChange(ev) {
        this.setState({
            inputText: ev.target.value
        })
    }

    handleCharClick(idx, ev) {
        let str = this.state.inputText.slice();
        str = str.slice(0, idx) + str.slice(idx + 1, str.length);
        this.setState({
            inputText: str
        });
    }

    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateInputChange.bind(this)} value={this.state.inputText}
                ref={(inp) => {this.inputElement = inp}}/>
                <Validate text={this.state.inputText}/>
                <div>
                {this.state.inputText.split('').map((char, index) => {
                    return (
                        <CharComponent char={char} key={index} delete={this.handleCharClick.bind(this, index)}/>
                    );
                })}
                </div>
            </div>
        )
    }
}