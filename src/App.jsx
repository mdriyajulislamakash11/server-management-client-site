import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST", 
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("in side response data: ", data);
      });
  };

  return (
    <>
      <h1>Users Management Syystem</h1>
      <h3>Numbers Of Users: {users.length} </h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" name="" />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} {user.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
