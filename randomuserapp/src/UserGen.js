import React, { useEffect } from "react"

function UserGen() {

  useEffect(() => {
    fetch("https://randomuser.me/api")
    .then(r => r.json())
    .then(data => console.log(data))
  })

  return (
    <div className="UserGenerator">
      <h3>UserGenerator</h3>
    </div>
  );
}

export default UserGen;