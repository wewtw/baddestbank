import React from "react";
import { Card } from "./context";

function Home() {
  
  return (
    <Card
      txtcolor="black"
      header="Welcome to the Baddest Bank!"
      title="- A Bank With Ulimited Credits For Everyone!"
      body={<img src={require("./bank.png")} alt="Responsive" className="img-fluid" />}
    />
  );
}

export default Home;
