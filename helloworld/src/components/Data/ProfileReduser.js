let ADD_POST="ADD-POST"
let POST_CHANGE="POST-CHANGE"

export let ProfileReduser = (action, state) => {
    if (action.type === ADD_POST) {
        let newPost = {
            message: state.profilePage.newPostText,
            id: 4,
            likes: 0,
        }

        state.postData.unshift(newPost)

    }
    else if (action.type === POST_CHANGE) {
        state.newPostText = action.text

    }

    return state

}

export let addPostAC = ()=>{
    return{
        type: "ADD-POST",
        id: 1
    }
}

export let onChangePostTextAC=(text)=>{
    return{
        type: "POST-CHANGE",
        text: text
    }
}