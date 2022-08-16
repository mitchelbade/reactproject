import React, { useState, useEffect } from "react"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(r => r.json())
    .then(users => {
      console.log(users)
      setUsers(users)
    })
  }, [])

  const userList = users.map(user => <li>{user}</li>)

  return (
    <div className="Users">
      <h3>UserContainer</h3>
      {userList}
    </div>
  );
}

export default Users;