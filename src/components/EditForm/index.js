import React from "react";
import './index.scss'

export default function EditForm(props){
    console.log(props.val);
    return(
        <form className={'modal' + (props.index===null?'':' show')}>
            <input type="number" />
            <input type="submit" value="Save"/>
        </form>
    )
}