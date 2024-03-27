import { Component } from "react";

class Counter extends Component {
  state = {
    active: 0,
  };
  render() {
    const { active } = this.state;
    return (
      <div>
        <h1> {active} </h1>
        <div className="counter" >
          <button onClick={() => this.setState({ active: active + 1 })}>
            Increment
          </button>
          <button onClick={() => this.setState({ active: active - 1 })}>
            Decrement
          </button>
          <button onClick={() => this.setState({ active: 0 })}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
