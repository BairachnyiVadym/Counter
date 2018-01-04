import React from 'react';

const GrabNum = ({onAddChange}) => {
    return (
        <div className="App" id="input">
            <form>
                <input onChange={onAddChange} type="text" size={20} placeholder="Add number"/>
            </form>
        </div>
    );

};

export default GrabNum;