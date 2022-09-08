import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import FriendsList from "./FriendsList"
import About from "./About"
import Navigation from "./Navigation"
import './App.css';

function App() {
  

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/friendslist" element={<FriendsList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
