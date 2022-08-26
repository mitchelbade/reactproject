import React from "react"

function FriendsList({ users }) {

  const friendsList = users.map(user => 
  <div key={user.id} className="Friends-list">
    <img width="75" height="75" src={user.picture} />
    <ul>{user.first} {user.last}</ul>
    <ul>{user.cell}</ul>
    <ul>{user.email}</ul>
    <ul>{user.city}, {user.state} {user.postcode}</ul>
  </div>
  )

  return (
    <div className="friendslist">
      <h3>Friends</h3>
      {friendsList}
    </div>
  );
}

export default FriendsList;