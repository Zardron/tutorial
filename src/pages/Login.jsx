import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#4070f4] h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center bg-white md:w-[50%] w-[30%] p-6 rounded-lg">
          <h1 className="text-2xl font-bold ">Login</h1>

          <div className="flex flex-col mt-10 w-full gap-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full border-2 border-[#efefef] text-lg py-2 px-4 rounded-md focus:outline-none"
              value={email}
              onChange={handleChange}
            />

            <div className="relative">
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                className="w-full border-2 border-[#efefef] text-lg py-2 px-4 rounded-md focus:outline-none"
                value={password}
                onChange={handleChange}
              />

              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <IoEyeOffOutline color="#aaaaaa" />
                ) : (
                  <IoEyeOutline color="#aaaaaa" />
                )}
              </div>
            </div>

            <div className="text-center">
              <a href="" className="text-blue-400 font-medium">
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-[#0171d3] rounded-md font-medium"
              >
                Login
              </button>
            </div>

            <div className="flex items-center justify-center text-center gap-1">
              <p>Don't have an account?</p>
              <Link to="/register" className="text-blue-400 font-medium">
                Register
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="border border-gray-300 w-full"></div>
              <div>Or</div>
              <div className="border border-gray-300 w-full"></div>
            </div>

            <div className="relative">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 text-white bg-[#4267b2] rounded-md font-medium"
              >
                Login with Facebook
              </button>

              <div className="absolute top-2 left-4">
                <FaFacebookF
                  color="#0171d3"
                  className="w-8 h-8 p-2 bg-white rounded-full"
                />
              </div>
            </div>

            <div className="relative">
              <button
                type="submit"
                className="w-full flex border-2 items-center justify-center py-3  rounded-md font-medium"
              >
                Login with Google
              </button>

              <div className="absolute top-2 left-4">
                <FcGoogle
                  color="#0171d3"
                  className="w-10 h-10 p-2 bg-white rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
