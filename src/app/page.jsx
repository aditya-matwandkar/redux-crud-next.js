"use client";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import Home from "@/components/Home";

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
