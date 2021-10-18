import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, onChangeMessage, onChangePostText, sendMessage, subscribe} from "./state.js"
import state from './state'


export let reRender = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App onChangePostText={onChangePostText} onChangeMessage={onChangeMessage} state={state} sendMessage={sendMessage} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRender(state)
subscribe(reRender)