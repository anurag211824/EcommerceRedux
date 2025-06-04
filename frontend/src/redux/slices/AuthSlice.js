import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Retrieve user info and token from localStorage if available
const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Check for an existing guest ID in the localStorage or genrate a new One
const initialGuestId =
  localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);

// IntialState for the authentication slice

const initialState = {
  user: userFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null,
};

// Async Thunk for User login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        userData
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
      return response.data.user; // Return the user object from the response
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Step By step explanation of above function

//1. ✅ export const loginUser = createAsyncThunk(...
// You're exporting this function so it can be used in other files (like in your Redux slice or components).
// createAsyncThunk is a special function from Redux Toolkit.
// It creates an async action that automatically handles pending, fulfilled, and rejected states for API calls.

// 2. ✅ "auth/loginUser",
// This is the action type prefix.
// The final action types will look like:
// auth/loginUser/pending
// auth/loginUser/fulfilled
// auth/loginUser/rejected
// This helps you handle the status of the login process in your reducer.

// 3. async (userData, { rejectWithValue }) => {
// This is the payload creator function, an async function that takes:
// userData: This is the object you send to the API (e.g., { email, password }).
// rejectWithValue: A helper function to send back custom error data when something goes wrong.

// 4. ✅ const response = await axios.post(...)
// You are making a POST request to the login API using axios.
// The URL is dynamic and uses an environment variable:
// ${import.meta.env.VITE_BACKEND_URL} gets the base URL from your .env file (like http://localhost:5000).
// /api/users/login is the route on your backend that handles login.
// You're sending userData (email & password) in the request body.

// 5. ✅ localStorage.setItem("userInfo", JSON.stringify(response.data.user));
// You’re storing the user object (like name, email, id) into the browser’s local storage under the key "userInfo".
// JSON.stringify(...) converts the object into a string so it can be stored.

// ✅ localStorage.setItem("userToken", response.data.token);
// You also save the JWT token (or any login token) under the key "userToken".
// This is usually used to authenticate further API requests.

// ✅ return response.data.user;
// After successful login, you return the user object.
// This value goes to the fulfilled state in your Redux slice.

// ❌ catch (error) { return rejectWithValue(error.response.data); }
// If something goes wrong (wrong password, network error, etc.), this block runs.
// rejectWithValue(error.response.data):
// Sends the error data to the rejected case in your reducer.
// error.response.data contains custom error messages sent from the backend.

// Async Thunk for User registerration

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        userData
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
      return response.data.user; // Return the user object from the response
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.guestId = `guest_${new Date().getTime()}`; // reset the guestId on logout
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.setItem("guestId", state.guestId); // Set a new guestId in localStorage
    },
  },
  generateNewGuestId: (state) => {
    state.guestId = `guest_${new Date().getTime()}`;
    localStorage.setItem("guestId", state.guestId);
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // 👈 payload = response.data.user
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login = false;
        state.error = action.payload.message; // 👈 payload = error.response.data
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // 👈 payload = response.data.user
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.login = false;
        state.error = action.payload.message; // 👈 payload = error.response.data
      });
  },
});

export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;
