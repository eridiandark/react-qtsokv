import React from "react";
import DelIcon from "./inc/delete.svg"

let data = [1, 2, 3, 4];

export default function Table() {
    const [tableData, setTableData] = React.useState(data);
    const addRow = (val) => {
        tableData.push(val)
        setTableData(tableData);
    }
    return(
        <div className="info-table">
            {
                tableData.map((value, index) =>
                    <Item key={value} value={value} onRemove={
                        ()=>setTableData(tableData.filter((item, key) => key !== index))
                    }/>)
            }
        </div>
    )
}

function Item(props){
    return(
        <>
            <span>{props.value}</span>
            <button className="row_del" onClick={props.onRemove}>
                <img width="22" src={DelIcon} alt="Del"/>
            </button>
        </>
    )
}