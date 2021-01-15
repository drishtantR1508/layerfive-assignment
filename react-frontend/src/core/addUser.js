import React from "react";

const Add = () => {
  return (
    <div>
      <br />
      <form
        className="container"
        action="http://127.0.0.1:8000/api/user/signup/"
        method="POST"
      >
        <div className="form-group">
          <label for="exampleInputFirstName">First Name</label>
          <input
            name="first_name"
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputLastName">Last Name</label>
          <input
            name="last_name"
            type="text"
            className="form-control"
            id="exampleInputLastName"
            aria-describedby="emailHelp"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputphone">Phone</label>
          <input
            name="phone"
            type="text"
            className="form-control"
            id="exampleInputphone"
            aria-describedby="emailHelp"
            placeholder="Enter your Phone No"
          />
        </div>
        <div className="form-group">
          <label for="inputAddress">Address Line 1</label>
          <input
            name="address1"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Address Line 2</label>
          <input
            name="address2"
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              name="city"
              type="text"
              className="form-control"
              id="inputCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label for="inputGender">Gender</label>
            <input name="gender" id="inputGender" className="form-control">
              {/* <option selected>Others...</option>
              <option>Female</option>
              <option>Male</option>
              <option>Prefer Not to Say</option> */}
            </input>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              name="zipcode"
              type="text"
              className="form-control"
              id="inputZip"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputFirstName">State</label>
          <input
            name="state"
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="emailHelp"
            placeholder="Enter Your State"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Add;
