import React from 'react';
import {Card, UserContext} from './context'

function AllData() { //loop throw the users.
  const ctx = React.useContext(UserContext);
  const data = [];
  let i = 0;
  for (const row of ctx.users) {
    data.push(
      <tr key={i}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.password}</td>
        <td>{row.balance}</td>
      </tr>
    );

    i++;
  }
  //make table with userInfo
  return (
    <Card header="All Data"
    body={
    <>
      <table className="table table-striped" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
    }/>
  );
}

export default AllData;