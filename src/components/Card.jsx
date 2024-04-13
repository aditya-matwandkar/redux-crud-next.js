"use client";
import React from "react";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteCard } from "@/app/redux/slice/cardSlice";
import Link from "next/link";

function Card({ employee }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-[372px] sm:w-[330px] lg:w-80 bg-[#323232] rounded-lg duration-75 hover:scale-105 p-3 text-gray-100">
        <Link
          href={"/" + employee.id}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="text-[#6A9955] mb-1">
            {employee.id}
          </div>
          <h1 className="text-2xl font-semibold mb-1">{employee.name}</h1>
          <h3 className="text-sm mb-2 text-[#CE9178]">@{employee.username}</h3>
          <p className="text-gray-200">Email: {employee.email}</p>
          <p className="text-gray-200">
            Contact: {employee.phone.split("x")[0].trim()}
          </p>
        </Link>
        <div className="mt-3 flex gap-4 right-0 justify-end text-xl text-gray-300">
          <div
            onClick={() => dispatch(deleteCard(employee.id))}
            className="h-8 w-8 rounded-full hover:text-white hover:bg-gray-500 flex justify-center items-center cursor-pointer"
          >
            <IoMdTrash />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
