import React from "react"
import "./Post.css"
import Pes from "../../../img/pes.jpg"



function Post(props){
    return(
         <div className="post">
            <div className="post-data">
                <img src={props.img}/>
                <h3>{props.name}</h3>
            </div>
            <p>{props.message}</p>
        </div>
    )
}

export default Post