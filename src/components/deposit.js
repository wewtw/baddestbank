import React from "react";
import { UserContext, Card } from "./context";
import Button from 'react-bootstrap/Button';

function Deposit() {
  const ctx = React.useContext(UserContext);
  const [value, setValue] = React.useState("");
  const [update, setUpdate] = React.useState("false");
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  let loggedInUser = ctx.isLoggedIn[0];

  const handleContextChange = (event) => {
    setValue(event.target.value);
  };

  function handleDeposit() {
    let balance = document.getElementById("balance").value;
    if (balance > 0 && !isNaN(balance)) {
      alert(
        "Success! Funds have been deposited: $" +
        value
      );
      loggedInUser.user.balance += Number(balance);//update to new bal

      setUpdate(true);
      setShow(false); //sd
      setTimeout(() => setStatus(""), 5000);
    } else {
      alert("Please enter a natural number.");
    }
  }
  function clearForm() {
    setValue("");
    setShow(true);
  }

  return (
    <Card
      txtcolor="blue"
      header="Deposit funds."
      status={status}
      body={
        show ? (
          loggedInUser ? (
            <>
              <h5>
                {update
                  ? "Balance: " + loggedInUser.user.balance
                  : "Balance: " + loggedInUser.user.balance}
              </h5>
              <h5>Please enter an amount to deposit.</h5>
              <input
                type="number"
                className="form-control"
                width="300"
                placeholder="Enter an amount"
                id="balance"
                onChange={handleContextChange}
                value={value}
              ></input>
              <br />
              <Button
                type="submit"
                disabled={value ? false : true}
                className="btn btn-primary"
                onClick={handleDeposit}
              >
                Submit deposit
              </Button>
              
            </>
          ) : (
            "Please login to make a deposit!"
          )
        ) : (
          "Funds have been deposited to: " + loggedInUser.user.email + ': $'+
          value +
          ". Your new balance is: $" +
          loggedInUser.user.balance,
          <button
              type="submit"
              disabled={value ? false : true}
              className="btn btn-light"
              onClick={clearForm}
            >
              Deposit more{" "}
            </button>
        )
        
      }
    />
  );
}

export default Deposit;
