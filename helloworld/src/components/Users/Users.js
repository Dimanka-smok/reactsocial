import React from "react";
import User from "./User/User";


function Users(props){
    return(
        <div className="users">
            {
                props.friend.map((object)=><User data={object}/>)
            }

        </div>
    )
}

export default Users