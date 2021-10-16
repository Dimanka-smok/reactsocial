import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';



function App(props) {
  console.log(props)
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header/>
        <Navbar/> 
          <div className="wrapper-content">
            <Route path="/profile" render={ ()=><Profile onChangePostText={props.onChangePostText} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} postData={props.state.profilePage.postData}/>}/>
            <Route path="/messager" render={ ()=><Dialogs sendMessage={props.sendMessage} messageData={props.state.dialogPage.messageData} dialogData={props.state.dialogPage.dialogData}/>}/>
            <Route path="/users" render={ ()=><Users friend={props.state.userPage.friends}/>}/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
  