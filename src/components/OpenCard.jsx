"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Link from "next/link";

function OpenCard() {
  const { id } = useParams();

  const state = useSelector((state) => state.card);
  const employee = state.cards.find((employee) => employee.id === parseInt(id));

  return (
    <>
      <div className="w-full h-screen display flex justify-center items-center relative">
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
        <div className="w-[372px] sm:w-[500px] lg:w-[580px] bg-[#323232] rounded-lg p-5 text-gray-100">
          <div className="text-[#6A9955] mb-5 text-lg">
            {/* {Date.now().toString().slice(0, 3) + employee.id} */}
            {employee.id}
          </div>

          <h1 className="text-4xl font-semibold mb-2">{employee.name}</h1>
          <h3 className="mb-5 text-[#CE9178]">@{employee.username}</h3>
          <p className="text-gray-200 text-lg mg-1">Email: {employee.email}</p>
          <p className="text-gray-200 text-lg">
            Contact: {employee.phone.split("x")[0].trim()}
          </p>
          <div className="mt-3 flex gap-4 right-0 justify-end text-xl text-gray-300">
            <Link href={`/edit/${employee.id}`}>
              <div className="h-9 w-9 rounded-full hover:text-white hover:bg-gray-500 flex justify-center items-center cursor-pointer">
                <MdEdit />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenCard;
