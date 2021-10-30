import {ProfileReduser} from "./components/Data/ProfileReduser";

const ADD_POST="ADD-POST"
const POST_CHANGE="POST-CHANGE"
const SEND_MESSAGE="SEND-MESSAGE"
const MESSAGE_CHANGE="MESSAGE-CHANGE"

let store = {



    dispatch(action) {
        this._state=ProfileReduser(this._state.profilePage,action)
        this.reRender(this._state)

        if (action.type === SEND_MESSAGE ) {
            let newMessage = {
                message: this._state.dialogPage.newMessageText,
                id: 5,
            }

            this._state.dialogPage.messageData.push(newMessage)
            this.reRender(this._state)
        }

        else if(action.type=== MESSAGE_CHANGE){
            this._state.dialogPage.newMessageText = action.text
            this.reRender(this._state)
        }
    },

    _state: {
        profilePage: {
            postData: [
                {message: "Напомним, Death Stranding Director’s", id: 1, likes: 5},
                {message: "«Меня зовут Пророк» — релизный трейлер Crysis Remastered Trilogy", id: 2, likes: 8},
                {message: "Руководитель Deathloop раскрывает секреты игрового дизайна", id: 3, likes: 22},
            ],

            newPostText: "Какие у вас Новости?"
        },

        dialogPage: {
            dialogData: [
                {name: "Владимир", id: 1},
                {name: "Мария", id: 2},
                {name: "Михаил", id: 3},
                {name: "Вячеслав", id: 4},
                {name: "Алексей", id: 5},
            ],

            messageData: [
                {message: "Привет. Как дела?", id: 1},
                {message: "Здравствуйте.", id: 2},
                {message: "Здарова. Пойдешь гулять?", id: 3},
                {message: "Привет. Ты вечером свободен?", id: 4},
            ],

            newMessageText: "Всем привет!"
        },

        userPage: {
            friends: [
                {name: "Владимир", id: 1},
                {name: "Мария", id: 2},
                {name: "Михаил", id: 3},
                {name: "Вячеслав", id: 4},
                {name: "Алексей", id: 5},
            ]
        },


    },

    reRender() {

    },

    subscribe(reRenderFromIndex) {
        this.reRender = reRenderFromIndex
    },
}

export let addMessageAC=()=>{
    return{
        type:"SEND-MESSAGE",
        id:1
    }
}

export let onChangeMessageTextAC =(text)=>{
    return{
        type:"MESSAGE-CHANGE",
        text:text
    }
}

export default store