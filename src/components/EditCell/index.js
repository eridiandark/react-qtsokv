import React from "react";
export default function EditCell({onValid, onSave, val}){
    const [editMode, setEM] = React.useState(false);
    const [isValid, setIV] = React.useState(true);
    const inpRef = React.useRef(val);

    const doubleClick = () => {
        setEM(true);
        inpRef.current.value = val;
        setTimeout(()=>{inpRef.current.focus();}, 100);
    }
    const keyPress = e => {
        switch (e.key){
            case 'Enter':
                saveVal(inpRef.current.value);
                break;
            case 'Escape':
                inpRef.current.value = val;
                setEM(false);
                break;
        }
    }
    const saveVal = () => {
        let newVal = inpRef.current.value;
        setIV(onValid(newVal));
        if(isValid){
            onSave(newVal)
            setEM(false);
        }
    }

    return(
        <div className={"edit-item" + (editMode?" edit":"")}>
            <span onDoubleClick={doubleClick}>{val}</span>
            <input
                type="text"
                ref={inpRef}
                className={"form-control" + (isValid?"":"is-invalid")}
                onKeyUp={keyPress}
                onBlur={()=>saveVal(inpRef.current.value)}/>
        </div>
    )
}