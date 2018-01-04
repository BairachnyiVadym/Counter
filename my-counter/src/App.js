import React, { Component } from 'react';
import ReactHeader from "./ReactHeader";
import Counter from "./containers/Counter";
import GrabNum from "./components/GrabNum";

class App extends Component {
  render() {
    return (
        <div>
            <ReactHeader/>
            <Counter />
            <GrabNum />
        </div>
    );
  }
}

export default App;
