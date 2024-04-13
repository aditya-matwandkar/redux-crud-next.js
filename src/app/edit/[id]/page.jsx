"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "@/app/redux/slice/cardSlice";
import Link from "next/link";

export default function UpdateCard() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.card);
  const employee = state.cards.find((employee) => employee.id === parseInt(id));
  const [updatedCard, setUpdatedCard] = useState(employee);

  const [isUpdated, setIsUpdated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCard(updatedCard));
    setIsUpdated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCard({
      ...updatedCard,
      [name]: value,
    });
    setIsUpdated(false);
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
          className="bg-[#323232] w-[400px] sm:w-[60%] lg:w-[48%] px-8 py-7 rounded-xl flex flex-col gap-6"
        >
          <div className="flex justify-between items-center">
            Id:
            <input
              type="text"
              name="name"
              readOnly
              value={id}
              onChange={handleChange}
              required
              autoComplete="off"
              className="bg-[#161616] md:w-80 py-2 px-4 rounded-md outline-none text-[#6A9955]"
            />
          </div>
          <div className="flex justify-between items-center">
            Name:
            <input
              type="text"
              name="name"
              value={updatedCard.name}
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
              value={updatedCard.username}
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
              value={updatedCard.email}
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
              value={updatedCard.phone}
              required
              onChange={handleChange}
              autoComplete="off"
              className="bg-[#161616] md:w-80 py-2 px-4 rounded-md outline-none"
            />
          </div>
          <button
            type="submit"
            className={`w-20 h-8 mt-6 self-center rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-700 text-sm cursor-pointer flex items-center justify-center ${
              isUpdated && "bg-green-800 hover:bg-green-800"
            }`}
          >
            {isUpdated ? "Updated" : "Update"}
          </button>
        </form>
      </div>
    </>
  );
}
