import React, { useState } from "react"
import AddFriendButton from "./AddFriendButton"
import { useNavigate } from "react-router-dom"

function NewFriendForm({ addFriend }) {
  const [newFriend, setNewFriend] = useState({
      first: "",
      last: "",
      city: "",
      state: "",
      country: "",
      postcode: "",
      date: "",
      cell: "",
      email: "",
      nat: "",
      picture: ""
  })

  let nav = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
      })
      .then(addFriend(newFriend))
      .then(nav("/friendslist"))
  }

  function handleChange(e) {
    setNewFriend({
      ...newFriend, [e.target.name]: e.target.value
    })
  }


  return (
      <form className="newfriendform" onSubmit={handleSubmit}>
        <input placeholder="First Name" name="first" value={newFriend.first} onChange={handleChange}/><br/>
        <input placeholder="Last Name" name="last" value={newFriend.last} onChange={handleChange}/><br/>
        <input placeholder="City" name="city" value={newFriend.city} onChange={handleChange}/><br/>
        <input placeholder="State" name="state" value={newFriend.state} onChange={handleChange}/><br/>
        <input placeholder="Country" name="country" value={newFriend.country} onChange={handleChange}/><br/>
        <input placeholder="ZIP" name="postcode" value={newFriend.postcode} onChange={handleChange}/><br/>
        <input placeholder="MM/DD/YYYY" name="date" value={newFriend.date} onChange={handleChange}/><br/>
        <input placeholder="Phone Number" name="cell" value={newFriend.cell} onChange={handleChange}/><br/>
        <input placeholder="Email" name="email" value={newFriend.email} onChange={handleChange}/><br/>
        <input placeholder="Nationality" name="nat" value={newFriend.nat} onChange={handleChange}/><br/>
        <input placeholder="Selfie URL" name="picture" value={newFriend.picture} onChange={handleChange}/><br/>
        <AddFriendButton />
      </form>
  );
}

export default NewFriendForm;