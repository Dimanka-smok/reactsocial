import React from "react";
import Pes from "../../img/pes.jpg"
import Cat1 from "../../img/cat1.jpg"
import Enot from "../../img/enot.jpg"
import Hedgehog from "../../img/hedgehog.jpg"
import "./Posts.css"
import Post from "./Post/Post";
import Dialogs from "../Dialogs/Dialogs";



function Posts() {
    let message1="Напомним, Death Stranding Director’s Cut доступна только на PlayStation 5 и включает в себя множество добавок, разработанных специально для переиздания. Например, гоночные трассы с машинами. «Режиссёрская версия» доступна в двух вариантах — обычном за 3 599 рублей и расширенном за 4 299 рублей."
    let message2="Работа над ремастером началась с каталогизации — разработчикам пришлось разбирать игру на отдельные части и вспоминать, как они взаимодействуют друг с другом. Таких частей набралось около 100 000, включая текстуры, звуковые эффекты, ролики и элементы интерфейса."
    let message3="С 1 октября произойдёт корректировка рекомендованных розничных цен на консоли и аксессуары Xbox в России, что связано с изменениями курса валют."
    let message4="Jumanji: The Video Game — это игра по мотивам фильма «Джуманджи: Зов джунглей». В ней игроки попадают в прекрасный и опасный мир Джуманджи, где их ждёт незабываемое приключение."
    return(
        <div className="posts">
            <input placeholder="Какие у вас новости?"/>
            <button>Добавить пост</button>
            <Post img={Pes} message={message1} name={"Дмитрий"}/>
            <Post img={Cat1} message={message2} name={"Станислав"}/>
            <Post img={Enot} message={message3} name={"Андрей"}/>
            <Post img={Hedgehog} message={message4} name={"Виктория"}/>
            <Dialogs/>
        </div>
    )
}

export default Posts