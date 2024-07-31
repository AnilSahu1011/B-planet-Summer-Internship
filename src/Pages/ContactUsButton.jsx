import React from "react";
import { Link } from "react-router-dom";

function ContactUsButton() {
  return (
    <div>
        <Link to="/contactus">
          <div className="border-2 border-solid border-black rounded-3xl px-3 py-1">
            Contact Us
          </div>
        </Link>
    </div>
  );
}

export default ContactUsButton;
