import React from "react";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex bg-customColor text-black justify-around p-5">
      <div>
        <Link to="/">
          <div className="text-4xl  font-sans">B.planet</div>
        </Link>
      </div>
      <div className="justify-center items-center text-lg flex gap-8">
        {
          <Link to="/contactus">
            <div className="border-2 border-solid border-black rounded-3xl px-3 py-1">Contact Us</div>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/login">
            <div>Login</div>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/profile">
            <div>Profile</div>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
