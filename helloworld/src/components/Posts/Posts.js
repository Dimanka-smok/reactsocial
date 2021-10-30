import React from "react";
import "./Posts.css"
import Post from "./Post/Post";
import {addPostAC, onChangePostTextAC} from "../Data/ProfileReduser";


function Posts(props) {
    let postText = React.createRef()

    let addPost = () => {
        if (postText.current.value.length > 0) {
            props.dispatch(addPostAC())
        }
    }

    let onChangePostText = () => {
        props.dispatch(onChangePostTextAC(postText.current.value))
    }

    return (
        <div className="posts">
            <input ref={postText}
                   value={props.newPostText}
                   onChange={onChangePostText}
                   placeholder="Какие у вас новости?"/>
            <button onClick={addPost}>Добавить пост</button>
            {
                props.postData.map((object) => <Post message={object.message} id={object.id} likes={object.likes}/>)
            }
        </div>
    )
}

export default Posts