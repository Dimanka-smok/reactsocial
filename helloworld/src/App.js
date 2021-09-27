import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header/>
        <Navbar/> 
          <div className="wrapper-content">
            <Route path="/profile" component={Profile}/>
            <Route path="/messager" component={Dialogs}/>
            
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
  