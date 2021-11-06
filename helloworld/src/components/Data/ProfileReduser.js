const ADD_POST="ADD-POST"
const POST_CHANGE="POST-CHANGE"

let initialState = {
    postData: [
        {message: "Напомним, Death Stranding Director’s", id: 1, likes: 5},
        {message: "«Меня зовут Пророк» — релизный трейлер Crysis Remastered Trilogy", id: 2, likes: 8},
        {message: "Руководитель Deathloop раскрывает секреты игрового дизайна", id: 3, likes: 22},
    ],

    newPostText: "Какие у вас Новости?"
}

 export let ProfileReduser = (state=initialState, action) => {
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

