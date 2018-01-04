import {ADD_NUM, DECREMENT, INCREMENT, ODD_INCREMENT} from "../actions/actionCreators";

function CounterApp(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case ODD_INCREMENT:
            if (state % 2 !== 0) {
                return state + 1;
            } else {
                return state;
            }
        case ADD_NUM:
            return state + action.num;
        default:
            return state;
    }
};

export default CounterApp;