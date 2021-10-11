import React from "react";
import "./Dialogs.css"
import Message from "./Dialog/Message";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItems/DialogsItem";



function Dialogs(props){

    let messageText = React.createRef()

    let addMessage = ()=>{
        alert(messageText.current.value)
    }


    console.log(props)
    return(
        <div className="dialogs">
            <div className="dialog-user">
                {
                    props.dialogData.map((object)=><DialogItem name={object.name} id={object.id}/>)
                }
            </div>
            <div className="dialog-text">
                {
                    props.messageData.map((object)=> <Message message={object.message} id={object.id}/>)
                }
                <div className="addMessage">
                    <input ref={messageText} placeholder="Напишите сообщение..." type="text"/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs