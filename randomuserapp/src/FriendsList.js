import React, { useState, useEffect } from "react"

function FriendsList({ users }) {

  const userList = users.map(user => 
  <ul key={user.id}>Name: {user.name.first} {user.name.last}</ul>
  )

  return (
    <div className="Users">
      <h3>Friends</h3>
      {userList}
    </div>
  );
}

export default FriendsList;