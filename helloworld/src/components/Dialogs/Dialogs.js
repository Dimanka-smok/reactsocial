import React from "react";
import "./Dialogs.css"
import Message from "./Dialog/Message";
import DialogItem from "./DialogsItems/DialogsItem";
import {addMessageAC, onChangeMessageTextAC} from "../Data/MessageReduser";


function Dialogs(props) {

    let messageText = React.createRef()

    let addMessage = () => {
        if (messageText.current.value.length > 0) {
            props.dispatch(addMessageAC())
        }
    }

    let onChangeMessage = () => {
        props.dispatch(onChangeMessageTextAC(messageText.current.value))
    }

    return (
        <div className="dialogs">
            <div className="dialog-user">
                {
                    props.dialogData.map((object) => <DialogItem name={object.name} id={object.id}/>)
                }
            </div>
            <div className="dialog-text">
                {
                    props.messageData.map((object) => <Message message={object.message} id={object.id}/>)
                }
                <div className="addMessage">
                    <input onChange={onChangeMessage}
                           value={props.newMessageText}
                           className="addMessageText"
                           ref={messageText}
                           placeholder="Напишите сообщение..."
                           type="text"/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs