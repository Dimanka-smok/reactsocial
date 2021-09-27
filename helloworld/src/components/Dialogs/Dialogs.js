import React from "react";
import "./Dialogs.css"
import Message from "./Dialog/Message";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItems/DialogsItem";

function Dialogs(){
    let message1="Не следует, однако, забывать о том, что консультация с профессионалами из IT позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. С другой стороны выбранный нами инновационный."
    let message2="Дорогие друзья, постоянный количественный рост и сфера нашей активности способствует подготовке и реализации направлений прогрессивного развития. Практический опыт показывает, что реализация намеченного плана развития влечет за собой процесс внедрения."
    let message3="С другой стороны начало повседневной работы по формированию позиции позволяет оценить значение существующих финансовых и административных условий."
    let message4="С другой стороны реализация намеченного плана развития требует от нас анализа существующих финансовых и административных условий."
    return(
        <div className="dialogs">
            <div className="dialog-user">
               <DialogItem name={"Владимир"} id={"1"}/>
               <DialogItem name={"Мария"} id={"2"}/>
               <DialogItem name={"Михаил"} id={"3"}/>
               <DialogItem name={"Вячеслав"} id={"4"}/>
            </div>
            <div className="dialog-text">
                <Message  message={message1}/>
                <Message  message={message2}/>
                <Message  message={message3}/>
                <Message message={message4}/>
            </div>
        </div>
    )
}

export default Dialogs