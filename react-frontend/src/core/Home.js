import React from "react";
import { Link } from "react-router-dom";
import Base from "./Base";
import Add from "./addUser";

function Home() {
  return (
    <Base title="Layer Five" description="User Dashboard">
      <div className="text-center">
        <button className="btn btn-danger btn-lg">
          <Link className="" to="/userbase">
            UserBase
          </Link>
        </button>
        <Add />
      </div>
    </Base>
  );
}

export default Home;
