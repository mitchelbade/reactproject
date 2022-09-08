import React, { useState, useEffect } from "react"
import NewFriendForm from "./NewFriendForm";
import Friend from "./Friend";


function FriendsList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(r => r.json())
    .then(data => setUsers(data))
  }, [])

  function addFriend(friend) {
    fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
      })
    const newFriend = {...friend, id: users.length+1}
    console.log(newFriend)
    .then(setUsers([...users, newFriend]))
  }

  const friendsList = users.map(user => 
  <Friend 
  key={user.id}
  picture={user.picture}
  first={user.first}
  last={user.last}
  cell={user.cell}
  email={user.email}
  city={user.city}
  state={user.state}
  postcode={user.postcode}
  />
  )

  return (
    <div className="friendslist">
      <h3>Add Friend</h3>
      <NewFriendForm addFriend={addFriend} />
      <h3>Friends</h3>
        {friendsList}
    </div>
  );
}

export default FriendsList;