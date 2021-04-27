import React, {useContext} from "react";
import './index.scss';
import Item from "../Item";
import {TableDataContext} from "../App";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function Table() {
    const [tableData, setTableData] = useContext(TableDataContext)
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="info-table">
                <div className={"row"}>
                    <span className={"table-head col1"}></span>
                    <span className={"table-head col2"}>ID</span>
                    <span className={"table-head col3"}>NAME</span>
                    <span className={"table-head col4"}>VALUE</span>
                    <span className={"table-head col5"}></span>
                </div>
                {tableData.map((value, index) => <Item
                    key={index}
                    index={index}
                    id={value.id}
                />)}
            </div>
        </DndProvider>
    )
}

/*
import ListItem from 'live/components/GameList/ListItem';
import { liveSetSelectedGame } from 'live/redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
    const { game, section } = ownProps;

    return { game, section };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ onClick: liveSetSelectedGame }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);*/
