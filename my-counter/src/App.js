import React, { Component } from 'react';
import ReactHeader from "./ReactHeader";
import Counter from "./containers/Counter";
import Num from "./containers/Num";

class App extends Component {
  render() {
    return (
        <div>
            <ReactHeader/>
            <Counter />
            <Num />
        </div>
    );
  }
}

export default App;
