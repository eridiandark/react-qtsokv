import React from "react";
import Calculator from "../Calculator";
import Table from "../Table";

const data = [1, 2, 3, 4];

export default function App(){
    const [tableData, setTableData] = React.useState(data);
    const delItem = index => setTableData(tableData.filter((item, key) => key !== index));
    const addItem = val => setTableData([val, ...tableData]);
    const editItem = (value, index) => {
        let arr = tableData.slice();
        arr[index] = value;
        setTableData(arr);
    }
    const upItem = index => {
        if(tableData.length>1){
            let arr = tableData.slice();
            let tmp = index === 0 ? tableData.length - 1 : index - 1;
            [arr[index], arr[tmp]] = [arr[tmp], arr[index]];
            setTableData(arr);
        }
    }
    const downItem = index => {
        if(tableData.length>1){
            let arr = tableData.slice();
            let tmp = index === tableData.length - 1 ? 0 : index + 1;
            [arr[index], arr[tmp]] = [arr[tmp], arr[index]];
            setTableData(arr);
        }
    }
    return(
        <div className="page">
            <h1>App</h1>
            <Calculator onSave={addItem}/>
            <Table
                tableData={tableData}
                updateData={setTableData}
                delItem={delItem}
                editItem={editItem}
                upItem={upItem}
                downItem={downItem}/>
        </div>
    );
}