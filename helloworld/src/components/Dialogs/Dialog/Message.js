import React from "react"
import "./Message.css"

function Message (props){
    return(
        <div className="messsage">
            <p className="message-text">{props.message}</p>
        </div>
    )
}

export default Message