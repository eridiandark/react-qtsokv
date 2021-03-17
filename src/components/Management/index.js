import React, { Component } from "react";
/*import Form from "../Form";*/
import Calculator from "../calculator/scripts/calculator"
import Table from "../Table";

class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      list: [],
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  onChange = (value) => {
    this.setState((state) => ({
      list: [value, ...state.list],
    }));
  };

  listRemoveHandler = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list: list });
  };

  render() {
    return (
      <div className="App">
        <Calculator onSave={this.onChange} />
        <Table removeHandler={this.listRemoveHandler} list={this.state.list} />
        <div>Date: {this.state.date.toLocaleString()}</div>
        <div>Author: {this.props.name}</div>
      </div>
    );
  }
}

export default Management;
