import React from "react";
import Calculator from "../Calculator";
import Table from "../Table";

export default function App(){
    const refTable = React.useRef(null);
    return(
        <div className="page">
            <h1>App</h1>
            <Calculator/>
            <Table ref={refTable}/>
        </div>
    );
}