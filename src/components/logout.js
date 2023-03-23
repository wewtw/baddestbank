import React from "react";
import { Route } from "react-router";
import { UserContext, Card } from "./context";

export function Logout() {
  const { user } = React.useContext(UserContext);

  return (
    <>
      {!user && (
        <Card header="Logout">
          
          <a href="#/login/" style={{ color: "lightgreen" }}>
            Would you like to log back in?
          </a>
        </Card>
      )}
    </>
  );
}

export default Logout;
