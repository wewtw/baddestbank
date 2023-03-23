import React from "react";
import { UserContext, Card } from "./context";
function Withdraw() {
  const [update, setUpdate] = React.useState("false");
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext);
  let loggedInUser = ctx.isLoggedIn[0];

  const handleTextChange = (event) => {
    setValue(event.target.value);
  };

  function handleWithdraw() {
    let balance = document.getElementById("balance").value;
    if (
      balance > 0 &&
      loggedInUser.user.balance >= balance &&
      !isNaN(balance)
    ) {alert("Successful withdrawal : $" + value);
      loggedInUser.user.balance -= Number(balance);
      setUpdate(true);
      setShow(false);
    } else {
      alert("Insufficient funds.");
    }
  }

  return (
    <Card
      txtcolor="black"
      header="Withdraw Funds."
      body={
        show ? (
          loggedInUser ? (
            <>
              <h5>
                
                {update
                  ? "Current Balance: " + loggedInUser.user.balance
                  : "Balance: " + loggedInUser.user.balance}
              </h5>
              <h5>Please enter an amount to withdraw.</h5>
              <input
                type="number"
                className="form-control"
                placeholder="Enter an amount"
                width="300"
                id="balance"
                onChange={handleTextChange}
                value={value}
              ></input><br/>
              <button
                type="submit"
                disabled={value ? false : true}
                className="btn btn-primary"
                onClick={handleWithdraw}
              >
                Submit withdrawal
              </button>
            </>
          ) : (
            "Please login to make a withdrawal."
          )
        ) : (
          "You withdrew $" + value +"! The remaining balance on this account: " + loggedInUser.user.email + ' is: $'+ loggedInUser.user.balance + '.'
        )
      }
    />
  );
}
export default Withdraw;
