import React from "react";

const Input = ({ type, value, name, placeholder, onChange }) => {
  console.log(value);
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required
      onChange={onChange}
      className="border border-black py-2 px-4 rounded-md placeholder:text-gray-400 focus:outline-blue-500"
    />
  );
};

export default Input;
