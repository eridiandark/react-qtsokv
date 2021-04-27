import React, {useContext} from "react";
import DelIcon from "../Table/inc/delete.svg";
import {TableDataContext} from "../App";
import EditCell from "../EditCell";
import {useDrag, useDrop} from "react-dnd";
import update from 'immutability-helper';

const ItemTypes = {
    Item: 'item',
}

export default function Item({id, index}) {
    const [tableData, setTableData] = useContext(TableDataContext)
    const rowRef = React.useRef();

    const delItem = () => setTableData(tableData.filter((item, key) => key !== index));
    const moveItem = (dragIndex, hoverIndex) => {
        if (tableData.length > 1) {
            let arr = tableData.slice();
            [arr[dragIndex], arr[hoverIndex]] = [arr[hoverIndex], arr[dragIndex]];
            setTableData(arr);
            return true;
        }
    }

    const moveItem2 = React.useCallback((dragIndex, hoverIndex) => {
        const dragItem = tableData[dragIndex];
        setTableData(update(tableData, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragItem],
            ],
        }));
    }, [tableData]);
    const getControl = () => {
        let res = "";
        if (index > 0 && index < tableData.length - 1) {
            res = <div className={"controls col1"}>
                <span className={"btn-top"} onClick={() => moveItem(index, index - 1)}>&#9650;</span>
                <span className={"btn-bottom"} onClick={() => moveItem(index, index + 1)}>&#9660;</span>
            </div>
        } else if (index === 0) {
            res = <div className={"controls first-row col1"}>
                <span className={"btn-bottom"} onClick={() => moveItem(index, index + 1)}>&#9660;</span>
            </div>
        } else if (index === tableData.length - 1) {
            res = <div className={"controls last-row col1"}>
                <span className={"btn-top"} onClick={() => moveItem(index, index - 1)}>&#9650;</span>
            </div>
        }
        return res;
    }

    const [{handlerId}, drop] = useDrop({
        accept: ItemTypes.Item,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!rowRef.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = rowRef.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveItem2(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.Item,
        item: () => {
            return {id, index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(rowRef))
    return (
        <div className={"row"} ref={rowRef} style={{opacity}} data-handler-id={handlerId}>
            {getControl()}
            <div className={"item col2"}>
                <span>{tableData[index].id}</span>
            </div>
            <EditCell
                className={"col3"}
                val={tableData[index].name}
                type={"text"}
                onValid={val => true}
                onSave={val => {
                    let arr = JSON.parse(JSON.stringify(tableData));
                    arr[index].name = val;
                    setTableData(arr);
                }}/>
            <EditCell
                className={"col4"}
                val={tableData[index].val}
                type={"number"}
                onValid={val => !(isNaN(+val) || val === '')}
                onSave={val => {
                    let arr = JSON.parse(JSON.stringify(tableData));
                    arr[index].val = val;
                    setTableData(arr);
                }}/>
            <button className="row-del col5" onClick={delItem}>
                <img width="22" src={DelIcon} alt="Del"/>
            </button>
        </div>
    )
}