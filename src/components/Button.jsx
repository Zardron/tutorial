import React from "react";

const Button = ({ title, type, className, onClick }) => {
  return (
    <button
      type={type}
      className={`py-2 px-4 rounded-md ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
