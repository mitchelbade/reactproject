import React, { useEffect } from "react"

function UserGen() {

  useEffect(() => {
    fetch("https://randomuser.me/api")
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="UserGenerator">
      <button>Generate New User</button>
      <button>Add User</button>
      <h3>UserGenerator</h3>
    </div>
  );
}

export default UserGen;