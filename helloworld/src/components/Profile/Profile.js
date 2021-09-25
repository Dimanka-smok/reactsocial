import React from "react"
import "./Profile.css"
import Pes from "../../img/pes.jpg"

function Profile(){
    return(
        <div className="profile">
            <div className="me">
                
            </div>
            <div className="posts">
                <input placeholder="Какие у вас новости?"/>
                <button>Добавить пост</button>
                <div className="post">
                    <div className="post-data">
                    <img src={Pes}/>
                    <h3>Дмитрий</h3>
                    </div>
                    <p>Работа над ремастером началась с каталогизации — разработчикам пришлось разбирать игру на отдельные части и вспоминать, как они взаимодействуют друг с другом. Таких частей набралось около 100 000, включая текстуры, звуковые эффекты, ролики и элементы интерфейса.</p>

                </div>
            </div>
        </div>
    )
}

export default Profile