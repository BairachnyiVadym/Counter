import {connect} from "react-redux";
import CounterView from "../components/CounterView";

const mapStateToProps = (state) => {
    return {
        value: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: () => {
            dispatch();
        },
        onDecrementClick: () => {
            dispatch();
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