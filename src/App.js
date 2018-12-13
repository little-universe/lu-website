import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleContext } from './style-context';
import { FirstList, SecondList } from './List';
import { First, Second } from './First';

let styles = {}

class App extends Component {
  state = {
    first: true,
    list: false
  }

  render() {
    let c
    if(this.state.list) {
      c = this.state.first ? <FirstList /> : <SecondList />
    } else {
      c = this.state.first ? <First /> : <Second />
    }
    return (
      <div className="App">
        {c}
        <button onClick={() => { this.setState({ first: !this.state.first }) }}>animate</button>
        <button onClick={() => { this.setState({ list: !this.state.list }) }}>switch to list</button>
      </div>
    );
  }
}

export default App;
