import React from "react";
import Calculator from "../Calculator";
import Table from "../Table";
import EditForm from "../EditForm";

const data = [1, 2, 3, 4];

export default function App(){
    const [tableData, setTableData] = React.useState(data);
    const [editItemIndex, setEII] = React.useState(null);
    const addItem = (val) => {
        let arr = [val, ...tableData];
        console.log(arr);
        setTableData(arr);
    }
    const showEditForm = (index) => {
        setEII(index)
    }
    const saveValue = (val) => {
        if(editItemIndex) tableData[editItemIndex] = val;
    }
    return(
        <div className="page">
            <h1>App</h1>
            <Calculator onSave={addItem}/>
            <Table tableData={tableData} updateData={setTableData} showEditForm={showEditForm}/>
            <EditForm index={editItemIndex} val={editItemIndex===null?null:tableData[editItemIndex]}/>
        </div>
    );
}