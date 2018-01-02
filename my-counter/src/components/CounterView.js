import React from 'react';

const CounterView = ({value, onIncrementClick, onDecrementClick, onOddIncrementClick, onAsyncIncrementClick}) => {
    return (
        <div>
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