import React from "react";
import SaveIcon from './inc/floppy-disk.svg';
import "./index.scss";

export default function Calculator(props){
    const [answer, setAnswer] = React.useState('');

    const refX = React.useRef(null);
    const refY = React.useRef(null);
    const refOperator = React.useRef(null);

    const pressAnswer = () => {
        let x = refX.current.value;
        let y = refY.current.value;
        let operator = refOperator.current.value;
        if(isNaN(+x) || x === '') {
            setAnswer('x not a number');
        }
        else if(isNaN(+y) || y === ''){
            setAnswer('y not a number');
        }
        else {
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
                        setAnswer("error - division by zero");
                    }
                    break;
                default:
                    setAnswer("error - operator no valid");
            }
        }
    }
    const onSave = () => {
        props.onSave(answer);
    }
    return(
        <div className="calculator">
            <input type="number" ref={refX} placeholder="x"/>
            <select ref={refOperator}>
                <option>+</option>
                <option>-</option>
                <option>/</option>
                <option>*</option>
            </select>
            <input type="number" ref={refY} placeholder="y"/>
            <button onClick={pressAnswer}>=</button>
            <span>{answer}</span>
            <button className="calc_save" onClick={onSave}><img src={SaveIcon} alt="Save"/></button>
        </div>
    );
}
