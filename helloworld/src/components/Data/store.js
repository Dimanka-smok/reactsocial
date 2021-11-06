import {combineReducers, createStore} from "redux"
import {ProfileReduser} from "./ProfileReduser";
import {MessageReduser} from "./MessageReduser";

 let redusers = combineReducers({
    profilePage: ProfileReduser,
    dialogPage: MessageReduser,
})

export let store = createStore(redusers)

