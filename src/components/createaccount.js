import React from "react";
import { UserContext, Card } from "./context";
import Button from 'react-bootstrap/Button';
function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    let isValid = true;
    if (!field) {
      setStatus("Please enter the: " + label);
      setTimeout(() => setStatus(""), 5000);
      return false;
    }
    if (label === "name") {
      isValid = field.length >= 4;
      isValid = String(field)
        .match(/^[a-zA-Z]/);
      setStatus(
        isValid ? "" : "Name is too short. The min lenght is 2 characters. Or symbols are in the input feild"
      );
    }
    
    
    if (label === "email") {
      isValid = String(field)
        .toLowerCase()
        .match(/\S+@\S+\.\S+/);
      setStatus(isValid ? "" : "Please enter a valid email");
    }
    if (label === "password") {
      isValid = field.length >= 8;
      isValid = String(field)
        .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/);
      setStatus(isValid ? "" : "Password must be at least 8 characters long and must contain at least one lowercase character, one uppercase character, one number, one special character.");
    }

    if (!isValid) {
      console.log(status);
      return false;
    }
    if (!isValid === ctx.users.find((user) => user.email === email)) {
      setStatus(isValid ? "" : "The email already in use!");
    } else {
      return true;
    }
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 1 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      txtcolor="black"
      header="Create new account with BaddestBank!"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={handleCreate}
              disabled={name && email && password ? false : true}
            >
              Create Account
            </Button>
          </>
        ) : (
          <>
            <h5>Cagradulations!!</h5>
            <button
              type="submit"
              disabled={name && email && password ? false : true}
              className="btn btn-light"
              onClick={clearForm}
            >
              Add Another Account{" "}
            </button>{" "}
            <br/>
            <br/>
            Or
            <br/>
            <br />
            <a href="#/login/">Log In</a>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
