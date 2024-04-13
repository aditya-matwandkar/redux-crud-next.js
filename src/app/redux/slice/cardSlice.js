import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const initialState = {
  cards: [],
  isLoading: false,
  isError: false,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { name, username, email, phone } = action.payload;
      const lastIdx = state.cards.length - 1;
      const newCard = {
        id: state.cards[lastIdx].id + 1,
        name,
        username,
        email,
        phone,
      };
      state.cards.push(newCard);
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard: (state, action) => {
      const { name, username, email, phone } = action.payload;
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      state.cards[index] = {
        id: action.payload.id,
        name,
        username,
        email,
        phone,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cards = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { deleteCard, addCard, updateCard } = cardSlice.actions;

export default cardSlice.reducer;
