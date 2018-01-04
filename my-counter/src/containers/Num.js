/*
import {connect} from "react-redux";
import {AddNum} from "../actions/actionCreators";
import GrabNum from "../components/GrabNum";

const mapDispatchToProps = (dispatch) => {
    return {
        onAddChange: e => {
            let value = Number.parseInt(e.target.value);
            e.target.value = '';
            return dispatch(AddNum(value));
        }
    }
}

const Num = connect(
    null,
    mapDispatchToProps
)(GrabNum);

export default Num;*/
