import React, { useState, useEffect } from "react";
import Base from "./Base";
import { Link } from "react-router-dom";
import { getUsers } from "./helper/coreapicalls";
export default function User() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const loadAllUsers = () => {
    getUsers().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });
  };

  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <Base>
      <div className="text-center">
        <button className="btn btn-danger btn-lg">
          <Link to="/">Add a User</Link>
        </button>
        <br />
        <br />
      </div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Address Line 1</th>
            <th scope="col">Address Line 2</th>
            <th scope="col">City</th>
            <th scope="col">Zip Code</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.address1}</td>
                <td>{user.address2}</td>
                <td>{user.city}</td>
                <td>{user.zipcode}</td>
                <td>{user.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Base>
  );
}
