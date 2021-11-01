const ADD_POST="ADD-POST"
const POST_CHANGE="POST-CHANGE"

 export let ProfileReduser = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            message: state.newPostText,
            id: 4,
            likes: 0,
        }
        state.postData.unshift(newPost)
        state.newPostText=""
    }
    else if (action.type === POST_CHANGE) {
        state.newPostText = action.text
    }
    return state
}

export let addPostAC = ()=>{
    return{
        type: ADD_POST,
        id: 1
    }
}

export let onChangePostTextAC=(text)=>{
    return{
        type: POST_CHANGE,
        text: text
    }
}

