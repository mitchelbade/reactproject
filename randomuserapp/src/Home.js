import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <h3>Connect with friends</h3>
      <Link to="/friendslist">
        <button>Add Friends</button>
      </Link>
    </div>
  );
}

export default Home;