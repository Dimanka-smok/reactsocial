const SEND_MESSAGE="SEND-MESSAGE"
const MESSAGE_CHANGE="MESSAGE-CHANGE"

export let MessageReduser=(state, action)=>{
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
