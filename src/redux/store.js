import { configureStore } from "@reduxjs/toolkit";
import ImageSliceReducer from "./imageSlice";

const store = configureStore({
  reducer: {
    image: ImageSliceReducer,
  },
});

export default store;
