import React from 'react';
const CounterView = () => {
    return (
        <div>
            <span>Clicked: 0 times</span>
            {' '}
            <button>Increment</button>
            {' '}
            <button>Decrement</button>
            {' '}
            <button>Increment if odd</button>
            {' '}
            <button>Increment async</button>
        </div>
    );
};

export default CounterView;