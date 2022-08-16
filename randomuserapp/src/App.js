import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Users from "./Users"
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
            {/* <Route path="/newuser" element={<CreateUser />} />
            <Route path="/" element={<Home />} /> */}
          </Routes>
        </header>
      </div>
      <Navigation />
    </Router>
  );
}

export default App;
