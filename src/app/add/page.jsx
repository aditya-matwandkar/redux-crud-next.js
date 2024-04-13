"use client";

import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addCard } from "@/app/redux/slice/cardSlice";
import Link from "next/link";

export default function AddCard() {
  const [newCard, setNewCard] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(newCard));
    setNewCard({
      name: "",
      username: "",
      email: "",
      phone: "",
    });
    setIsAdded(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });
    setIsAdded(false);
  };

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center relative">
        <Link
          href={"/"}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="absolute top-12 left-2 md:left-12 w-14 h-14 flex items-center justify-center rounded-full text-5xl text-gray-100 hover:bg-gray-600 duration-100 cursor-pointer">
            <IoIosArrowRoundBack />
          </div>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-[#323232] w-[400px] sm:w-[60%] lg:w-[48%] px-8 py-6 rounded-xl flex flex-col gap-6"
        >
          <div className="text-lg mb-3">Enter details :-</div>
          <div className="flex justify-between items-center">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Jhon Doe"
              value={newCard.name}
              onChange={handleChange}
              required
              autoComplete="off"
              className="bg-[#161616] md:w-80 py-2 px-4 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-between items-center">
            Username:
            <input
              type="text"
              name="username"
              placeholder="user_123"
              value={newCard.username}
              onChange={handleChange}
              required
              autoComplete="off"
              className="bg-[#161616] md:w-80 py-2 px-4 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-between items-center">
            Email:
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={newCard.email}
              onChange={handleChange}
              required
              autoComplete="off"
              className="bg-[#161616] md:w-80 py-2 px-4 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-between items-center">
            phone:
            <input
              type="text"
              name="phone"
              placeholder="+91 9876543210"
              value={newCard.phone}
              required
              onChange={handleChange}
              autoComplete="off"
              className="bg-[#161616] md:w-80 py-2 px-4 rounded-md outline-none"
            />
          </div>
          <button
            type="submit"
            className={`w-20 h-8 mt-6 self-center rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-700 text-sm cursor-pointer flex items-center justify-center ${
              isAdded && "bg-green-800 hover:bg-green-800"
            }`}
          >
            {isAdded ? "Added" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
}
