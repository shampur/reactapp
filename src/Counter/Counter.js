import React from 'react'
import Button from './Button/Button';
import HeaderOutput from './HeaderOutput/HeaderOutput';
import Aux from "../Hoc/Aux";
import {connect} from 'react-redux'

class Counter extends React.Component {
    render() {
        return (
            <Aux>
                <HeaderOutput value={this.props.ctr}/>
                <Button label="Increment" clicked={this.props.onIncrement}/>
                <Button label="Decrement" clicked={this.props.onDecrement}/>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);