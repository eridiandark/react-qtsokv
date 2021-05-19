import React from "react";
import SaveIcon from './inc/floppy-disk.svg';
import "./index.scss";
import actions from "../../action";
import {connect} from "react-redux";


export function Calculator(props) {
    const [answer, setAnswer] = React.useState(null);
    const [errMess, setErrMess] = React.useState('');

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
                <input type="number" ref={refX} placeholder="x" onChange={()=>{clearError(); pressAnswer();}}/>
                <select ref={refOperator} onChange={()=>{clearError(); pressAnswer();}}>
                    <option>+</option>
                    <option>-</option>
                    <option>/</option>
                    <option>*</option>
                </select>
                <input type="number" ref={refY} placeholder="y" onChange={()=>{clearError(); pressAnswer();}}/>
                <span>=</span>
                <span>{answer}</span>
                <button disabled={answer === null} className="calc-save" onClick={() => {
                    console.log("hello");
                    props.addItem({id: 0, name: refName.current.value, val: answer})
                }}><img src={SaveIcon} alt="Save"/></button>
            </div>
            <div className={"alert alert-danger fade" + (errMess ? " show" : "")} role="alert">
                {errMess}
            </div>
        </>
    );
}

export default connect(null, actions)(Calculator)