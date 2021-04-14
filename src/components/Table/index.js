import React, {useContext} from "react";
import './index.scss';
import Item from "../Item";
import {TableDataContext} from "../App/context";

export default function Table() {
    const [tableData, setTableData] = useContext(TableDataContext)
    return (
        <div className="info-table">
            {tableData.map((value, index) => <Item
                key={index}
                index={index}
            />)}
        </div>
    )
}

