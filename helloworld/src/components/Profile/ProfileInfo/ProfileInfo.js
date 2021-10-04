import React from "react";
import Pes from "../../../img/pes.jpg"


function ProfileInfo(){
    return(
        <div className="ProfileInfo">
            <img src={Pes}/>
            <h2>Дмитрий</h2>
        </div>
    )
}

export default ProfileInfo