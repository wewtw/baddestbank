import React from 'react';
import {Route, HashRouter, Routes} from 'react-router-dom';
import AllData from './components/alldata';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Home from './components/home';
import Login from './components/login';
import NavBar from './components/navbar';
import Withdraw from './components/withdraw';
import {UserContext} from './components/context'
import Logout from './components/logout';


function App() {
  return (
    <HashRouter>
          
            <UserContext.Provider value={{users:[{name: 'abel', email:'abel@mit.com', password:"secret", balance:1000000}], isLoggedIn:[]}}>
            
            <NavBar />
            <div className="container" style={{padding: '40px'}}>
            <Routes><Route path="/" exact element={<Home/>} />
            <Route path="/createaccount/" element={<CreateAccount/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/alldata/" element={<AllData/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/logout/" element={<Logout/>} />  
            </Routes>
            
            
            
            
            
            </div>
            </UserContext.Provider>
        </HashRouter>
        
    
  );
}
//https://reactrouter.com/en/main/upgrading/v5
export default App;
