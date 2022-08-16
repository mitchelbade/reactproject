import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import FriendsList from "./FriendsList"
import FriendsFinder from "./FriendFinder"
import About from "./About"
import Navigation from "./Navigation"
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(r => r.json())
    .then(users => {
      setUsers(users)
    })
  }, [])

  //Manually add info from API
  //Focus on getting minimum
  //Work on more explicit naming

  //Understanding State and useEffect
  //using setState updates value and triggers rerender


  return (
    <Router>
      
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friendslist" element={<FriendsList users={users} />} />
            <Route path="/friendfinder" element={<FriendsFinder />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
        <Navigation />
      </div>
      
    </Router>
  );
}

export default App;
