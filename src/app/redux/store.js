import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slice/cardSlice";

export const store = configureStore({
    reducer: {
        card: cardReducer,
    }
})