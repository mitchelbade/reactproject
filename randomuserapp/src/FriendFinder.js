import React, { useState, useEffect } from "react"

function UserGen() {
  const [randUser, setRandUser] = useState({})

  useEffect(() => {
    fetch("https://randomuser.me/api")
    .then(r => r.json())
    .then(data => 
      setRandUser(data))
  }, [])

  return (
    <div className="UserGenerator">
      <button>Generate New User</button>
      <button>Add User</button>
    </div>
  );
}

export default UserGen;