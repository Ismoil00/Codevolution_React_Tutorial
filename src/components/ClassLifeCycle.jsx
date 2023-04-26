import { Component } from "react";

class ClassLifecycle extends Component {
  constructor() {
    super();
    this.state = {
      class: "Constructor",
    };

    console.log("LifeCycle > Constructor Method");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle > getDerivedStateFromProps Method");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle > componentDidMount Method");
  }

  render() {
    console.log("LifeCycle > Render Method");

    return <div>Class Lifecycle</div>;
  }
}

export default ClassLifecycle;
