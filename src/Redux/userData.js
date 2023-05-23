import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = { _id: 0, first_name: "ss", last_name: '', email: '', age: 0, isLogin: false };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserTokening: (state) => {
            const userToken = localStorage.getItem("userToken");
            if (userToken != null) {
                const decodeData = jwtDecode(userToken)
                state.age = decodeData.age
                state._id = decodeData._id
                state.first_name = decodeData.first_name
                state.last_name = decodeData.last_name
                state.email = decodeData.email
                state.isLogin = true
            }
        },
        logOut: (state) => {
            state.age = 0
            state._id = ''
            state.first_name = ''
            state.last_name = ''
            state.email = ''
            state.isLogin = false;
            localStorage.removeItem("userToken");
        },
    }
})


export const userReducer = userSlice.reducer;

export const { logOut, getUserTokening } = userSlice.actions;