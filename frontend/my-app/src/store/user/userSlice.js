import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  roles: [],
  authorized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.authorized = true;
    },
    logout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.roles = [];
      state.authorized = false;
    },
    currentUser: (state, action) => {
      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, currentUser } = userSlice.actions;

export default userSlice.reducer;
