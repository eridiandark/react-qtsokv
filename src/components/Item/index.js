import React from "react";
import DelIcon from "../Table/inc/delete.svg";

export default function Item({val, delRow, editVal, upRow, downRow}){
    const [editMode, setEM] = React.useState(false);
    const [isValid, setIV] = React.useState(true);
    const inpValue = React.useRef(val);
    const doubleClick = () => {
        setEM(true);
        inpValue.current.value = val;
        //!!!!!!!!!!!!!
        inpValue.current.focus();
    }
    const keyPress = e => {
        switch (e.key){
            case 'Enter':
                saveVal();
                break;
            case 'Escape':
                setEM(false);
                break;
            default:
                setIV(true);
        }
    }
    const saveVal = () => {
        let newVal = inpValue.current.value;
        if(isNaN(+newVal) || newVal === ''){
            setIV(false);
        }
        else {
            editVal(Number(newVal))
            setEM(false);
        }
    }
    return(
        <>
            <div className={"controls"}>
                <span className={"btn-top"} onClick={upRow}>&#9650;</span>
                <span className={"btn-bottom"} onClick={downRow}>&#9660;</span>
            </div>
            <span className={editMode?"hide":""} onDoubleClick={doubleClick}>{val}</span>
            <input
                type="number"
                ref={inpValue}
                className={"form-control" + (editMode?" show":"") + (isValid?"":" is-invalid")}
                onKeyUp={keyPress}
                onBlur={saveVal}/>
            <button className="row-del" onClick={delRow}>
                <img width="22" src={DelIcon} alt="Del"/>
            </button>
        </>
    )
}