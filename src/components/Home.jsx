"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/app/redux/slice/cardSlice";
import Card from "./Card";
import Spinner from "./Spinner/Spinner";
import Link from "next/link";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.card);
  const cardsData = state.cards;

  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const id = e.target.value;
    setSearchValue(id);
    setFilteredData(cardsData.filter((card) => card.id === parseInt(id)));
  };

  useEffect(() => {
    if (cardsData.length === 0) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <>
      <main className="min-h-screen w-full bg-[#161616] text-[#D4D4D4] flex flex-col items-center py-10">
        <form onSubmit={handleSubmit} className="flex gap-3 items-center mb-12">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search by id"
            className="w-60 sm:w-80 h-10 px-3 rounded-lg border-none outline-none bg-gray-700 text-gray-100"
            autoComplete="off"
            value={searchValue}
            onChange={handleChange}
          />
          <Link href={"/add"}>
            <div className="h-8 px-2 bg-gray-600 hover:bg-gray-700 cursor-pointer rounded-lg text-sm text-gray-200 flex items-center justify-center">
              Add card
            </div>
          </Link>
        </form>

        {cardsData.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
            {filteredData.length === 0
              ? cardsData.map((employee) => (
                  <div key={employee.id}>
                    <Card employee={employee} />
                  </div>
                ))
              : filteredData.map((employee) => (
                  <div key={employee.id}>
                    <Card employee={employee} />
                  </div>
                ))}
          </div>
        ) : (
          <div className="mt-56">
            <Spinner />
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
