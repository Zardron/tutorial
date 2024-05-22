import React from "react";
import { Link, useLocation } from "react-router-dom";
import { authData, navbarData } from "../assets/data";
import Button from "./Button";

const Navbar = () => {
  const handleClick = () => {
    alert("Test");
  };

  const path = useLocation();

  const { pathname } = path;

  return (
    <div className="flex justify-between">
      <div className="w-[30%] p-2 border border-red-500">LOGO</div>

      <div className="w-[50%] p-2 flex justify-center gap-4 border border-red-500">
        {navbarData.map((data) => (
          <Link to={data.link} key={data.title}>
            <p
              className={`${
                pathname === data.link ? "text-purple-500 font-medium" : ""
              } cursor-pointer hover:text-purple-500 hover:font-medium`}
            >
              {data.title}
            </p>
          </Link>
        ))}
      </div>

      <div className="w-[20%] p-2 flex justify-end gap-4 border border-red-500">
        {authData.map((data) => (
          <Link to={data.link} key={data.title}>
            <p className="cursor-pointer">{data.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
