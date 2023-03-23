import React from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
// const Route = ReactRouterDOM.Route;
// const Link = ReactRouterDOM.Link;
// const HashRouter = ReactRouterDOM.HashRouter;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from "./logout";
import Login from "./login";
import { UserContext, Card } from "./context";

function NavBar() {
  const [show, setShow] = React.useState("true");

  const ctx = React.useContext(UserContext);
  function handleLogout() {
    
    setShow(true);
    if (ctx.isLoggedIn.length) {
      ctx.isLoggedIn.pop();
      alert("User has been logged out");
    }
  }
  return (
    (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#/" title="Home Page!" id="navbar-brand">
           The Baddest Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="hum" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/createaccount/" title="Create a new account!">
                | Create account:
                <img
                  alt="Brand"
                  style={{ height: "18px", width: "18px" }}
                  src={require("./addaccount.png")}
                ></img>
              </Nav.Link>
              <Nav.Link href="#/login/" title="Log into an existing account!">
                | Login:
                <img
                  alt="Brand"
                  style={{ height: "18px", width: "18px" }}
                  src={require("./login.png")}
                ></img>
              </Nav.Link>
              <Nav.Link href="#/deposit/" title="Make a deposit to an account!">
                | Deposit:
                <img
                  alt="Brand"
                  style={{ height: "18px", width: "18px" }}
                  src={require("./deposit.png")}
                ></img>
              </Nav.Link>
              <Nav.Link href="#/withdraw/" title="Make a withdrawal from an account!">
                | Withdraw:
                <img
                  alt="Brand"
                  style={{ height: "18px", width: "18px" }}
                  src={require("./withdrawal.png")}
                ></img>
              </Nav.Link>
              <Nav.Link href="#/alldata/" title="View Accounts!">
                | AllData:
                <img
                  alt="Brand"
                  style={{ height: "18px", width: "18px" }}
                  src={require("./data.png")}
                ></img>
              </Nav.Link>
              <Nav.Link href="#/logout/" title="Logout from current account!" onClick={handleLogout}>
                | Logout:
                <img
                  alt="Brand"
                  style={{ height: "18px", width: "18px" }}
                  src={require("./logout.png")}
                ></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
}

export default NavBar;