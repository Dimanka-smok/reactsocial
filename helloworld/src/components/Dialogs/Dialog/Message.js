import React from "react"
import "./Message.css"

function Message (props){
    return(
        <div className="messsage">
            <div className="justify-content-end">
            <h3>{props.name} </h3>
            </div>
            <p className="message-text">{props.message}</p>
        </div>
    )
}

export default Message