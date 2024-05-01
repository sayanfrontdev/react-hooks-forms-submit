import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [email, setEmail] = useState("sylviawoods@.io");
  const [password, setPassword] = useState("sylvia789");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmail(event){
    setEmail(event.target.value);
  }

  function handlePassword(event){
    setPassword(event.target.password);
  }
  



  return (
    <form style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={firstName}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", boxSizing: "border-box", transition: "all 0.3s ease" }}
        placeholder="First Name"
      />
      <br />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={lastName}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", boxSizing: "border-box", transition: "all 0.3s ease" }}
        placeholder="Last Name"
      />
      <br />
      <input
        type="text"
        onChange={handleEmail}
        value={email}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", boxSizing: "border-box", transition: "all 0.3s ease" }}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        onChange={handlePassword}
        value={password}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", boxSizing: "border-box", transition: "all 0.3s ease" }}
        placeholder="Password"
      />
      <br />
      <button
        type="submit"
        style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s ease" }}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
