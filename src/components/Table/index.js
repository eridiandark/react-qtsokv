import React, {useContext} from "react";
import './index.scss';
import Item from "../Item";
import {connect} from "react-redux";
import actions from "../../action";

export function Table(props) {
    return (

            <div className="info-table">
                <div className={"row"}>
                    <span className={"table-head col1"}></span>
                    <span className={"table-head col2"}>ID</span>
                    <span className={"table-head col3"}>NAME</span>
                    <span className={"table-head col4"}>VALUE</span>
                    <span className={"table-head col5"}></span>
                </div>
                {props.tableData.map((value, index) => <Item
                    key={index}
                    index={index}
                    id={value.id}
                />)}
            </div>

    )
}

function mapStateToProps(state) {
    return {
        tableData: state.data
    };
}

export default connect(mapStateToProps, actions)(Table)

