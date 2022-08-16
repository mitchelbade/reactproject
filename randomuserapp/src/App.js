import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Users from "./Users"
import UserGen from "./UserGen"
import CreateUser from "./CreateUser"
import Navigation from "./Navigation"
import './App.css';

function App() {
  return (
    <Router>
      
      <div className="App">
        <header className="App-header">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/usergenerator" element={<UserGen />} />
            <Route path="/newuserform" element={<CreateUser />} />
          </Routes>
          <Navigation />
        </header>
      </div>
      
    </Router>
  );
}

export default App;
