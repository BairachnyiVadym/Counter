import React from 'react';

const CounterView = ({value, onIncrementClick, onDecrementClick}) => {
    return (
        <div>
            <span>Clicked: {value} times</span>
            {' '}
            <button onClick={onIncrementClick}>Increment</button>
            {' '}
            <button onClick={onDecrementClick}>Decrement</button>
            {' '}
            <button>Increment if odd</button>
            {' '}
            <button>Increment async</button>
        </div>
    );
};

export default CounterView;