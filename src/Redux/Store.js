import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userData";

export let localStore = configureStore({
    reducer: {
        user: userReducer,
    }
})

