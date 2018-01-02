export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ODD_INCREMENT = 'ODD_INCREMENT';

export const Increment = () => {
    return { type: INCREMENT};
};

export const Decrement = () => {
    return { type: DECREMENT};
};

export const OddIncrement = () => {
    return { type: ODD_INCREMENT};
};
