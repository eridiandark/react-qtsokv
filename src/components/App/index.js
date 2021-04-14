import React from "react";
import Calculator from "../Calculator";
import Table from "../Table";
import {TableDataContext} from "./context";

const data = [
    {id: 1, name: 'val1', val: 1},
    {id: 2, name: 'val2', val: 2},
    {id: 3, name: 'val3', val: 3},
    {id: 4, name: 'val4', val: 4}
];

export default function App(){
    const [tableData, setTableData] = React.useState(data);
    return(
        <div className="page">
            <h1>App</h1>
            <TableDataContext.Provider value={[tableData, setTableData]}>
                <Calculator />
                <Table />
            </TableDataContext.Provider>
        </div>
    );
}