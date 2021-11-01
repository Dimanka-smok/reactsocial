import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./state";


export let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRender(store.getState())
store.subscribe(reRender)