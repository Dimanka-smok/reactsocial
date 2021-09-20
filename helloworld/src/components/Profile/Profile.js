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
                    <img src={Pes}/>
                </div>
            </div>
        </div>
    )
}

export default Profile