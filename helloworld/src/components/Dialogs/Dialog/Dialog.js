import React from "react"
import "./Dialog.css"

function Dialog (props){
    return(
        <div className="dialog">
            <div className="justify-content-end">
            <h3>{props.name} сообщает:</h3>
            </div>
            <p className="message-text">{props.message}</p>
        </div>
    )
}

export default Dialog