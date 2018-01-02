import {connect} from "react-redux";
import CounterView from "../components/CounterView";
import {Decrement, Increment} from "../actions/actionCreators";

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
            dispatch();
        },
        onAsyncIncrementClick: () => {
            dispatch();
        },
    }
};

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView);

export default Counter;