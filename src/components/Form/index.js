import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value1: "0", value2: "0", oper: "mult" };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("");
    let result = 0;
    let state = this.state;
    let v1 = Number(state.value1);
    let v2 = Number(state.value2);
    switch (state.oper) {
      case "add":
        result = v1 + v2;
        break;
      case "sub":
        result = v1 - v2;
        break;
      case "mult":
        result = v1 * v2;
        break;
      case "div":
        result = v1 / v2;
        break;
      default:
        result = v1 * v2;
    }
    this.props.onChange(String(result));
    this.setState({ value1: 0, value2: 0, oper: "mult" });
  };

  onChangeFirst = (e) => {
    const { value } = e.target;
    this.setState({ value1: value });
  };

  onChangeSecond = (e) => {
    const { value } = e.target;
    this.setState({ value2: value });
  };

  onChangeOperator = (e) => {
    const { value } = e.target;
    this.setState({ oper: value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChangeFirst}
          name="name"
          value={this.state.value1}
        />
        <select value={this.state.oper} onChange={this.onChangeOperator}>
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="mult">*</option>
          <option value="div">/</option>
        </select>
        <input
          onChange={this.onChangeSecond}
          name="name"
          value={this.state.value2}
        />
        <button>Store result</button>
      </form>
    );
  }
}

export default Form;
