import React from "react";
import "./Posts.css"
import Post from "./Post/Post";


function Posts(props) {
    return(
        <div className="posts">
            <input placeholder="Какие у вас новости?"/>
            <button>Добавить пост</button>
            {
                props.postData.map((object)=><Post message={object.message} id={object.id} likes={object.likes}/>)
            }
        </div>
    )
}

export default Posts