import { reRender } from "./Render"


let state={
    profilePage:{
        postData:[
            {message:"Напомним, Death Stranding Director’s", id:1, likes:5},
            {message:"«Меня зовут Пророк» — релизный трейлер Crysis Remastered Trilogy", id:2, likes:8},
            {message:"Руководитель Deathloop раскрывает секреты игрового дизайна", id:3, likes:22},
        ],

        newPostText: "testText"
    },
  
    dialogPage:{
        dialogData:[
            {name: "Владимир", id: "1"},
            {name: "Мария", id: "2"},
            {name: "Михаил", id: "3"},
            {name: "Вячеслав", id: "4"},  
            {name: "Алексей", id: "5"}, 
        ],
        
        messageData:[
            {message: "Привет. Как дела?", id: "1"},
            {message: "Здравствуйте.", id: "2"},
            {message: "Здарова. Пойдешь гулять?", id: "3"},
            {message: "Привет. Ты вечером свободен?", id: "4"},
        ]
    },

    userPage:{
        friends: [
            {name:"Владимир", id:1},
            {name:"Мария", id:2},
            {name:"Михаил", id:3},
            {name:"Вячеслав", id:4},
            {name:"Алексей", id:5},
        ]
    },

    
}

export let onChangePostText = (text)=>{
    state.profilePage.newPostText=text
    reRender(state)
}



 export let addPost = (postText)=>{
    let newPost = {
        message: postText,
        id: 4,
        likes: 0,
    }

    state.profilePage.postData.unshift(newPost)
    reRender(state)
}

export let sendMessage = (messageText) =>{
    let newMessage = {
        message: messageText,
        id: 5,
    }

    state.dialogPage.messageData.push(newMessage)
    reRender(state)
}







export default state