import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';


function App(props) {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className="wrapper-content">
                    <Route path="/profile" render={() => <Profile dispatch={props.dispatch}
                                                                  newPostText={props.state.profilePage.newPostText}
                                                                  postData={props.state.profilePage.postData}
                    />}
                    />
                    <Route path="/messager" render={() => <Dialogs dispatch={props.dispatch}
                                                                   newMessageText={props.state.dialogPage.newMessageText}
                                                                   messageData={props.state.dialogPage.messageData}
                                                                   dialogData={props.state.dialogPage.dialogData}/>}/>
                    <Route path="/users" render={() => <Users friend={props.state.userPage.friends}/>}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
  