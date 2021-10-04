import React from "react"
import "./Post.css"
import Pes from "../../../img/pes.jpg"



function Post(props){
    return(
         <div className="post">
            <div className="post-data">
                <img src={Pes}/>
                <h2>Дмитрий</h2>
            </div>
            <p>{props.message}</p>
            <p className="likes">{props.likes} Likes</p>
        </div>
    )
}

export default Post