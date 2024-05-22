import React, { useState } from "react";
import Img from "./Img";
import Header from "./Header";
// import Input from "../../components/Input";
import Button from "../../components/Button";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const { name, age, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-2 flex flex-col border border-red-500">
      <Header />
      <Img />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <label className="w-20">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
              className="border border-black py-2 px-4 rounded-md placeholder:text-gray-400 focus:outline-blue-500"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label className="w-20">Age:</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={age}
              onChange={handleChange}
              className="border border-black py-2 px-4 rounded-md placeholder:text-gray-400 focus:outline-blue-500"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label className="w-20">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="border border-black py-2 px-4 rounded-md placeholder:text-gray-400 focus:outline-blue-500"
            />
          </div>

          <div>
            <Button
              title="Submit"
              type="submit"
              className="bg-green-600 text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
