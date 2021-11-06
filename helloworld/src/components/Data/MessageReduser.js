const SEND_MESSAGE="SEND-MESSAGE"
const MESSAGE_CHANGE="MESSAGE-CHANGE"

let initialState = {
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
}

export let MessageReduser=(state=initialState, action)=>{
    if (action.type === SEND_MESSAGE ) {
        let newMessage = {
            message: state.newMessageText,
            id: 5,
        }

        state.messageData.push(newMessage)
        state.newMessageText=""
    }

    else if(action.type=== MESSAGE_CHANGE){
        state.newMessageText = action.text
    }
    return state
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
