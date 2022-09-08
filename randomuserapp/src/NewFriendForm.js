import React, { useState } from "react"
import { useResolvedPath } from "react-router-dom"
import AddFriendButton from "./AddFriendButton"

function NewFriendForm({ addFriend }) {
  const [friend, setFriend] = useState({
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


  function handleSubmit(e) {
    e.preventDefault()
    addFriend(friend)
    setFriend({
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
  }

  function handleChange(e) {
    setFriend({
      ...friend, [e.target.name]: e.target.value
    })
  }


  return (
      <form className="newfriendform" onSubmit={handleSubmit}>
        <input placeholder="First Name" name="first" value={friend.first} onChange={handleChange}/><br/>
        <input placeholder="Last Name" name="last" value={friend.last} onChange={handleChange}/><br/>
        <input placeholder="City" name="city" value={friend.city} onChange={handleChange}/><br/>
        <input placeholder="State" name="state" value={friend.state} onChange={handleChange}/><br/>
        <input placeholder="Country" name="country" value={friend.country} onChange={handleChange}/><br/>
        <input placeholder="ZIP" name="postcode" value={friend.postcode} onChange={handleChange}/><br/>
        <input placeholder="MM/DD/YYYY" name="date" value={friend.date} onChange={handleChange}/><br/>
        <input placeholder="Phone Number" name="cell" value={friend.cell} onChange={handleChange}/><br/>
        <input placeholder="Email" name="email" value={friend.email} onChange={handleChange}/><br/>
        <input placeholder="Nationality" name="nat" value={friend.nat} onChange={handleChange}/><br/>
        <input placeholder="Selfie URL" name="picture" value={friend.picture} onChange={handleChange}/><br/>
        <AddFriendButton />
      </form>
  );
}

export default NewFriendForm;