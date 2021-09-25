import React from "react"
import "./Profile.css"
import Pes from "../../img/pes.jpg"
import Posts from "../Posts/Posts"

function Profile(){
    return(
        <div className="profile">
            <div className="me">
                <img src={Pes}/>
                <h2>Дмитрий</h2>
            </div>
            <Posts/>
        </div>
    )
}

export default Profile