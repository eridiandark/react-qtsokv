import React from "react";
import SaveIcon from './inc/floppy-disk.svg';
import "./index.scss";
import {TableDataContext} from "../App/context";

export default function Calculator() {
    const [answer, setAnswer] = React.useState(null);
    const [errMess, setErrMess] = React.useState('');
    const [tableData, setTableData] = React.useContext(TableDataContext)

    const refName = React.useRef("");
    const refX = React.useRef(null);
    const refY = React.useRef(null);
    const refOperator = React.useRef(null);


    const pressAnswer = () => {
        let x = refX.current.value;
        let y = refY.current.value;
        let operator = refOperator.current.value;
        if (isNaN(+x) || x === '') {
            setErrMess('x not a number');
            setAnswer(null);
        } else if (isNaN(+y) || y === '') {
            setErrMess('y not a number');
            setAnswer(null);
        } else {
            x = parseFloat(x);
            y = parseFloat(y);

            switch (operator) {
                case "+":
                    setAnswer(x + y);
                    break;
                case "-":
                    setAnswer(x - y);
                    break;
                case "*":
                    setAnswer(x * y);
                    break;
                case "/":
                    if (y !== 0) setAnswer(x / y);
                    else {
                        setErrMess("error - division by zero");
                        setAnswer(null);
                    }
                    break;
                default:
                    setErrMess("error - operator no valid");
                    setAnswer(null);
            }
        }
    }

    const clearError = () => {
        setErrMess('');
    }

    return (
        <>
            <label>Name</label>
            <input type="text" ref={refName} className={"form-control"}/>
            <div className="calculator">
                <input type="number" ref={refX} placeholder="x" onChange={clearError}/>
                <select ref={refOperator} onChange={clearError}>
                    <option>+</option>
                    <option>-</option>
                    <option>/</option>
                    <option>*</option>
                </select>
                <input type="number" ref={refY} placeholder="y" onChange={clearError}/>
                <button onClick={pressAnswer}>=</button>
                <span>{answer}</span>
                <button disabled={answer === null} className="calc-save" onClick={() => {
                    let arr = JSON.parse(JSON.stringify(tableData));
                    arr.push({id: tableData[tableData.length - 1].id + 1, name: refName.current.value, val: answer})
                    setTableData(arr);
                }}><img src={SaveIcon} alt="Save"/></button>
            </div>
            <div className={"alert alert-danger fade" + (errMess ? " show" : "")} role="alert">
                {errMess}
            </div>
        </>
    );
}
