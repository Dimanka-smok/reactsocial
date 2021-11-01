import {ProfileReduser} from "./components/Data/ProfileReduser";
import {MessageReduser} from "./components/Data/MessageReduser";

let store = {

    dispatch(action) {
        this._state.dialogPage = MessageReduser(this._state.dialogPage, action)
        this._state.profilePage = ProfileReduser(this._state.profilePage,action)
        this.reRender(this._state)
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

    getState(){
         return this._state
    }
}

export default store