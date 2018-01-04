import React from 'react';
import {AddNum} from "../actions/actionCreators";
import {connect} from "react-redux";

let GrabNum = ({dispatch}) => {
    let input;
    return (
        <div className="App" id="input">
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(AddNum(Number.parseInt(input.value)));
                input.value = '';
            }}>
                <input ref={node => input = node} type="text" size={20} placeholder="Add number"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );

};

GrabNum = connect()(GrabNum);

export default GrabNum;