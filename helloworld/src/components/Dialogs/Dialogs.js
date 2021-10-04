import React from "react";
import "./Dialogs.css"
import Message from "./Dialog/Message";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItems/DialogsItem";



function Dialogs(props){
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
                    <input placeholder="Напишите сообщение..." type="text"/>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs