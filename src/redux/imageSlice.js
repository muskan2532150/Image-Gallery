import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const imageThunk = createAsyncThunk("imageThunk", async () => {
  const imgdata = await (
    await fetch(
      `https://api.unsplash.com/photos?per_page=30&client_id=_dvCzg9Ec9lc77yMy3uSHg9KiwK-USjgbRKkXB63VSI`
    )
  ).json();
  console.log(imgdata);
  return imgdata;
});

export const imageSearchThunk = createAsyncThunk(
  "imageSearchThunk",
  async (username) => {
    const imgdata = await (
      await fetch(
        `https://api.unsplash.com//search/photos?per_page=30&query=${username}&client_id=_dvCzg9Ec9lc77yMy3uSHg9KiwK-USjgbRKkXB63VSI`
      )
    ).json();
    return imgdata.results;
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(imageThunk.fulfilled, (state, action) => {
      state = [...action.payload];
      return state;
    });
    builder.addCase(imageSearchThunk.fulfilled, (state, action) => {
      state = [...action.payload];
      return state;
    });
  },
});

export const {} = imageSlice.actions;

export default imageSlice.reducer;
