import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Umed",
    };
    this.clicked = false;
    this.state = {
      count: 0,
    };
  }

  changeMessage() {
    if (!this.clicked) {
      this.setState({
        message: "We are glad to see you Bro!",
      });
      this.clicked = true;
    } else {
      this.setState({
        message: "Welcome Umed",
      });
      this.clicked = false;
    }
  }

  Increase = () => {
    this.setState(
      (prev) => ({
        count: prev.count + 1,
      }),
      () => {
        console.log("setState Callback Function", this.state.count);
      }
    );

    console.log(this.state.count);
  }

  render() {
    // console.log(this.props);
    const { name, children } = this.props;
    const { message, count } = this.state;

    return (
      <>
        <h1>Class {name}</h1>
        {children}
        <p>{message}</p>
        <button onClick={() => this.changeMessage()}>Change Message!</button>
        <p>{count}</p>
        <button onClick={this.Increase}>Increase</button>
      </>
    );
  }
}

export default ClassComponent;
