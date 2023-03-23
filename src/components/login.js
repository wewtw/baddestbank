import React from "react";
import { UserContext, Card } from "./context";
function Login() {
  const [show, setShow] = React.useState("true");
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ctx = React.useContext(UserContext);

  function handleLogin() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    const user = ctx.users.find((user) => user.email === email);
    if (!user) {
      setStatus("Invalid Account Name.");
      setTimeout(() => setStatus(""), 5000);
      return;
    }
    if (user.password === password) {
      setShow(false);
      ctx.isLoggedIn.push({ user });
      console.log(ctx);
      return;
    } else {
      setStatus("Invalid Password.");
      setTimeout(() => setStatus(""), 5000);
      return;
    }
  }
  function handleLogout() {
    setShow(true);
    ctx.isLoggedIn.pop();
    alert('User has been logged out')
  }
  function clearForm() {
    setEmail("");
    setPassword("");
    setShow(true);
  }
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 5000);
      return false;
    }
    return true;
  }
  return (
    <Card
      txtcolor="black"
      header="Please login to continue!"
      status={status}
      body={
        show ? (
          <>
            <br />
            Email
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
            <button
              type="submit"
              disabled={password && email ? false : true}
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <h5>Log In was successful! : {email}</h5>
            <a href="#/deposit/" style={{ color: "lightgreen" }}>
              Deposit Funds!
            </a>
            <br></br>
            <a href="#/withdraw/" style={{ color: "red" }}>
              Withdraw Funds!
            </a>
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogout} 
            >
              Log Out
            </button>
          </>
        )
      }
    />
  );
}
export default Login;
