import React from "react"

function Friend({ first, last, picture, cell, email, city, state, postcode }) {
    return (
        <div className="Friends-list">
            <img width="75" height="75" src={picture} />
            <ul>{first} {last}</ul>
            <ul>{cell}</ul>
            <ul>{email}</ul>
            <ul>{city}, {state} {postcode}</ul>
        </div>
    )
}

export default Friend