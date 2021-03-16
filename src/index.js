import React from "react";
import ReactDOM from "react-dom";

import Calculator from './components/calculator/scripts/calculator';

ReactDOM.render(
    <Calculator onSave={ value => alert('Saved ' + value) }/>,
    document.getElementById("root")
);
