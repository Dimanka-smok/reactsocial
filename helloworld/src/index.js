import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./state";


export let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 onChangePostText={store.onChangePostText.bind(store)}
                 onChangeMessage={store.onChangeMessage.bind(store)}
                 sendMessage={store.sendMessage.bind(store)}
                 addPost={store.addPost.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRender(store._state)
store.subscribe(reRender)