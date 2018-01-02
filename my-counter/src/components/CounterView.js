import React from 'react';
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

export default CounterView;