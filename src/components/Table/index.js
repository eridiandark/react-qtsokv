import React from "react";
import DelIcon from "./inc/delete.svg";
import './index.scss';

export default function Table(props) {
    const [tableData, setTableData] = React.useState(props.tableData);
    const addRow = val =>
        setTableData([...tableData, val]);
    return(
        <div className="info-table">
            {
                tableData.map((value, index) =>
                    <Item showEditForm={props.showEditForm} key={value} value={value} index={index} onRemove={
                        ()=>{
                            let arr = tableData.filter((item, key) => key !== index)
                            setTableData(arr);
                            props.updateData(arr);
                        }
                    }/>)
            }
        </div>
    )
}

function Item(props){
    return(
        <>
            <span>{props.value}</span>
            <button onClick={()=>{props.showEditForm(props.index)}}>Edit</button>
            <button className="row-del" onClick={props.onRemove}>
                <img width="22" src={DelIcon} alt="Del"/>
            </button>
        </>
    )
}