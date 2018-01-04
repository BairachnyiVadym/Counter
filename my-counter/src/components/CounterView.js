import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const CounterView = ({value, onIncrementClick, onDecrementClick, onOddIncrementClick, onAsyncIncrementClick}) => {
    return (
        <div className="App">
            <span>Clicked: {value} times</span>
            {' '}
            <button onClick={onIncrementClick}>Increment</button>
            {' '}
            <button onClick={onDecrementClick}>Decrement</button>
            {' '}
            <button onClick={onOddIncrementClick}>Increment if odd</button>
            {' '}
            <button onClick={onAsyncIncrementClick}>Increment async</button>
        </div>
    );
};

CounterView.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrementClick: PropTypes.func.isRequired,
    onDecrementClick: PropTypes.func.isRequired,
    onOddIncrementClick: PropTypes.func.isRequired,
    onAsyncIncrementClick: PropTypes.func.isRequired
};

export default CounterView;