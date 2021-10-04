import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';



function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header/>
        <Navbar/> 
          <div className="wrapper-content">
            <Route path="/profile" render={ ()=><Profile postData={props.state.profilePage}/>}/>
            <Route path="/messager" render={ ()=><Dialogs messageData={props.state.dialogPage} dialogData={props.state.dialogPage}/>}/>
            
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
  