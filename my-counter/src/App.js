import React, { Component } from 'react';
import ReactHeader from "./ReactHeader";
import Counter from "./containers/Counter";

class App extends Component {
  render() {
    return (
        <div>
            <ReactHeader/>
            <Counter />
        </div>
    );
  }
}

export default App;
