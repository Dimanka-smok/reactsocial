import React from "react";
import "./Dialogs.css"
import Message from "./Dialog/Message";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItems/DialogsItem";

let dialogNames=[
    {name: "Владимир", id: "1"},
    {name: "Мария", id: "2"},
    {name: "Михаил", id: "3"},
    {name: "Вячеслав", id: "4"},  
    {name: "Алексей", id: "5"}, 
]

let messages=[
    {message: "Привет. Как дела?", id: "1"},
    {message: "Здравствуйте.", id: "2"},
    {message: "Здарова. Пойдешь гулять?", id: "3"},
    {message: "Привет. Ты вечером свободен?", id: "4"},
]

function Dialogs(){
    return(
        <div className="dialogs">
            <div className="dialog-user">
                {
                    dialogNames.map((object)=><DialogItem name={object.name} id={object.id}/>)
                }
            </div>
            <div className="dialog-text">
                {
                    messages.map((object)=> <Message message={object.message} id={object.id}/>)
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