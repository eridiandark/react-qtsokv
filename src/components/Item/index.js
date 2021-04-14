import React, {useContext} from "react";
import DelIcon from "../Table/inc/delete.svg";
import {TableDataContext} from "../App/context";
import EditCell from "../EditCell";

export default function Item({index}) {
    const [editModeVal, setEMV] = React.useState(false);
    const [editModeName, setEMN] = React.useState(false);
    const [isValidVal, setIVV] = React.useState(true);

    const [tableData, setTableData] = useContext(TableDataContext)
    const inpValue = React.useRef(tableData[index].val);
    const inpName = React.useRef(tableData[index].name);


    const delItem = () => setTableData(tableData.filter((item, key) => key !== index));
    const editItem = value => {
        let arr = tableData.slice();
        arr[index] = value;
        setTableData(arr);
    }
    const moveItem = (direction = 'up') => {
        if (tableData.length > 1) {
            let arr = tableData.slice();
            let tmp;
            switch (direction) {
                case "up":
                    tmp = index === 0 ? tableData.length - 1 : index - 1
                    break;
                case "down":
                    tmp = index === tableData.length - 1 ? 0 : index + 1;
                    break;
                default:
                    return false;
            }
            [arr[index], arr[tmp]] = [arr[tmp], arr[index]];
            setTableData(arr);
            return true;
        }
    }
    const saveVal = () => {
        let newVal = inpValue.current.value;
        if (isNaN(+newVal) || newVal === '') {
            setIV(false);
        } else {
            editItem(Number(newVal), index)
            setEM(false);
        }
    }
    const getControl = () => {
        let res = "";
        if (index > 0 && index < tableData.length - 1) {
            res = <div className={"controls"}>
                <span className={"btn-top"} onClick={() => moveItem("up")}>&#9650;</span>
                <span className={"btn-bottom"} onClick={() => moveItem("down")}>&#9660;</span>
            </div>
        } else if (index === 0) {
            res = <div className={"controls first-row"}>
                <span className={"btn-bottom"} onClick={() => moveItem("down")}>&#9660;</span>
            </div>
        } else if (index === tableData.length - 1) {
            res = <div className={"controls last-row"}>
                <span className={"btn-top"} onClick={() => moveItem("up")}>&#9650;</span>
            </div>
        }
        return res;
    }
    return (
        <>
            {getControl()}
            <div className={"item"}>
                <span>{tableData[index].id}</span>
            </div>
            <EditCell
                val={tableData[index].name}
                onValid={val => true}
                onSave={val => {
                    let arr = JSON.parse(JSON.stringify(tableData));
                    arr[index].name = val;
                    setTableData(arr);
                }}/>
            <EditCell
                val={tableData[index].val}
                onValid={val => (isNaN(+val) && val !== '')}
                onSave={val => {
                    let arr = JSON.parse(JSON.stringify(tableData));
                    arr[index].val = val;
                    setTableData(arr);
                }}/>
            <button className="row-del" onClick={delItem}>
                <img width="22" src={DelIcon} alt="Del"/>
            </button>
        </>
    )
}