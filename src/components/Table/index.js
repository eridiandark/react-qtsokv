import React, {useEffect} from "react";
import './index.scss';
import Item from "../Item";
import {connect} from "react-redux";
import actions from "../../action";
import {getTableData} from "../../selectors";

export function Table({tableData, loadTableData}) {
    useEffect(()=>loadTableData(), [loadTableData])
    return (
            <div className="info-table">
                <div className={"row"}>
                    <span className={"table-head col1"}></span>
                    <span className={"table-head col2"}>ID</span>
                    <span className={"table-head col3"}>NAME</span>
                    <span className={"table-head col4"}>VALUE</span>
                    <span className={"table-head col5"}></span>
                </div>
                {tableData.map((value, index) => {
                    let type = 'center';
                    if(tableData.length === 1){
                        type = 'one';
                    }
                    else if(index === 0){
                        type = 'first';
                    }
                    else if(index + 1 === tableData.length){
                        type = 'last';
                    }
                    return(<Item
                        key={index}
                        data={value}
                        type={type}
                    />)
                })}
            </div>
    )
}

function mapStateToProps(state) {
    return {
        tableData: getTableData(state)
    };
}

export default connect(mapStateToProps, actions)(Table)

