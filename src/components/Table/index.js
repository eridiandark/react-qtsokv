import React, { Component } from "react";
import PropTypes from "prop-types";

import Row from "../Row";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteItem = (e) => {
    this.props.removeHandler(this.props.index);
  };

  render() {
    return (
      <div className="pseudo-table">
        {this.props.list.map((item, index) => (
          <Row
            key={index}
            index={index}
            removeHandler={this.deleteItem}
            item={item}
          />
        ))}
      </div>
    );
  }
}

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  removeHandler: PropTypes.func,
};

export default Table;
