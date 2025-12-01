import { configureStore } from "@reduxjs/toolkit";//To easily create the Redux store with all default settings already included.
import increment from "../pages/redux/incrementSlice";
import userSlice from "../pages/redux/userSlice";

export const store = configureStore({
    reducer: {
        count: increment,
        username: userSlice,
    },
})