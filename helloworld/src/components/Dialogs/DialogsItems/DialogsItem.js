import React from "react";
import { NavLink } from "react-router-dom";



function DialogItem(props){
    return(
        <div className="user">
            <NavLink to={`/messager/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem