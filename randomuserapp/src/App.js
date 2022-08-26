import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import FriendsList from "./FriendsList"
import About from "./About"
import Navigation from "./Navigation"
import NewFriend from "./NewFriend"
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(r => r.json())
    .then(data => setUsers(data))
  }, [])


  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/newfriend" element={<NewFriend />} />
            <Route path="/friendslist" element={<FriendsList users={users} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
