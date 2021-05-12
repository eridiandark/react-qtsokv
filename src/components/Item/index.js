import React from "react";
import DelIcon from "../Table/inc/delete.svg";

export default function Item({id, index}) {
    const rowRef = React.useRef();

    const getControl = () => {
        let res = "";

        res = <div className={"controls first-row col1"}>
            <span className={"btn-bottom"}>&#9660;</span>
        </div>
        return res;
    }

    return (
        <div className={"row"} ref={rowRef}>
            {getControl()}
            <div className={"item col2"}>
                <span>{id}</span>
            </div>
            <div></div>
            <div></div>
            <button className="row-del col5">
                <img width="22" src={DelIcon} alt="Del"/>
            </button>
        </div>
    )
}

/*<EditCell
                className={"col3"}
                val={tableData[index].name}
                type={"text"}
                onValid={val => true}
                onSave={val => {
                    let arr = JSON.parse(JSON.stringify(tableData));
                    arr[index].name = val;
                    setTableData(arr);
                }}/>
            <EditCell
                className={"col4"}
                val={tableData[index].val}
                type={"number"}
                onValid={val => !(isNaN(+val) || val === '')}
                onSave={val => {
                    let arr = JSON.parse(JSON.stringify(tableData));
                    arr[index].val = val;
                    setTableData(arr);
                }}/>*/