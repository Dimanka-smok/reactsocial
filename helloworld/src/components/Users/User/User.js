import React from "react";


function User(props){
    return(
        <div className="user">
            <div className="user-info">
                <h3>{props.data.name}</h3>
            </div>

        </div>
    )
}

export default User