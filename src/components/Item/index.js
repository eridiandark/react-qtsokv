import React from "react";
import DelIcon from "../Table/inc/delete.svg";
import {connect} from "react-redux";
import actions from "../../action";
import EditCell from "../EditCell";

function Item({data, type, moveItem, editItem, delItem}) {
    const rowRef = React.useRef();

    const getControl = () => {
        switch (type){
            case 'one':
                return (
                    <div className={"controls col1"}>
                        <span className={"btn-top"} style={{opacity: 0, cursor: "default"}}>&#9650;</span>
                        <span className={"btn-bottom"} style={{opacity: 0, cursor: "default"}}>&#9660;</span>
                    </div>
                );
            case 'center':
                return (
                    <div className={"controls col1"}>
                        <span className={"btn-top"} onClick={() => moveItem(data.id, 'up')}>&#9650;</span>
                        <span className={"btn-bottom"} onClick={() => moveItem(data.id, 'down')}>&#9660;</span>
                    </div>
                )
            case 'first':
                return (
                    <div className={"controls col1"}>
                        <span className={"btn-top"} style={{opacity: 0, cursor: "default"}}>&#9650;</span>
                        <span className={"btn-bottom"} onClick={() => moveItem(data.id, 'down')}>&#9660;</span>
                    </div>
                )
            case 'last':
                return (
                    <div className={"controls col1"}>
                        <span className={"btn-top"} onClick={() => moveItem(data.id, 'up')}>&#9650;</span>
                        <span className={"btn-bottom"} style={{opacity: 0, cursor: "default"}}>&#9660;</span>
                    </div>
                )
            default:
                return (
                    <div className={"controls col1"}>
                        <span className={"btn-top"} style={{opacity: 0, cursor: "default"}}>&#9650;</span>
                        <span className={"btn-bottom"} style={{opacity: 0, cursor: "default"}}>&#9660;</span>
                    </div>
                );
        }
    }

    return (
        <div className={"row"} ref={rowRef}>
            {getControl()}
            <div className={"item col2"}>
                <span>{data.id}</span>
            </div>
            <EditCell
                className={"col3"}
                val={data.name}
                type={"text"}
                onValid={val => true}
                onSave={val => editItem({id: data.id, name: val, val: data.val})}/>
            <EditCell
                className={"col4"}
                val={data.val}
                type={"number"}
                onValid={val => !(isNaN(+val) || val === '')}
                onSave={val => editItem({id: data.id, name: data.name, val: val})}/>
            <button className="row-del col5" onClick={() => delItem(data.id)}>
                <img width="22" src={DelIcon} alt="Del"/>
            </button>
        </div>
    )
}

export default connect(null, actions)(Item)