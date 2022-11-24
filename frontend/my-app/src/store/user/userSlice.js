import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  roles: [],
  isAuthorized: localStorage.getItem("compileTokenApp") || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const userAction = userSlice.actions;

export const selectUser = ({ user }) => user;

export default userSlice.reducer;
