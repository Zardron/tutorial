import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[30%] p-2 border border-red-500">LOGO</div>

      <div className="w-[50%] p-2 flex justify-center gap-4 border border-red-500">
        <Link to={"/"}>
          <p className="cursor-pointer">Home</p>
        </Link>

        <Link to="/about">
          <p className="cursor-pointer">About</p>
        </Link>

        <p className="cursor-pointer">Contact</p>
      </div>

      <div className="w-[20%] p-2 flex justify-end gap-4 border border-red-500">
        <p>Login</p>
        <p>Register</p>
      </div>
    </div>
  );
};

export default Navbar;
