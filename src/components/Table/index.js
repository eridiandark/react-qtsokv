import React from "react";
import './index.scss';
import Item from "../Item";

export default function Table({tableData, delItem, editItem, upItem, downItem}) {
    return(
        <div className="info-table">
            {tableData.map((value, index) => <Item
                key={value}
                val={value}
                delRow={() => delItem(index)}
                editVal={(val) => editItem(val, index)}
                upRow={() => upItem(index)}
                downRow={() => downItem(index)}/>)}
        </div>
    )
}

