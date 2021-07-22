import React, { Component } from "react";
import styled from "styled-components";

interface Istate {
  counter: number;
}

class App extends Component<{}, Istate> {
  state = {
    counter: 0,
  };

  add = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter} <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;
