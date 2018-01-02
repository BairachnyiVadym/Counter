import {connect} from "react-redux";
import CounterView from "../components/CounterView";
import {Decrement, Increment, OddIncrement} from "../actions/actionCreators";

const mapStateToProps = (state) => {
    return {
        value: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: () => {
            dispatch(Increment());
        },
        onDecrementClick: () => {
            dispatch(Decrement());
        },
        onOddIncrementClick: () => {
            dispatch(OddIncrement());
        },
        onAsyncIncrementClick: () => {
            setTimeout(() => dispatch(Increment()),3000);
        }
    }
};

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView);

export default Counter;