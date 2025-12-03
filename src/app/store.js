import { configureStore } from "@reduxjs/toolkit";//To easily create the Redux store with all default settings already included.
import increment from "../pages/redux/incrementSlice";
import userSlice from "../pages/redux/userSlice";
import nameSlice from "../pages/redux/nameSlice";
import { usersapi } from "../pages/RTK/users";

export const store = configureStore({
    reducer: {
        [usersapi.reducerPath]: usersapi.reducer,
        count: increment,
        username: userSlice,
        users: nameSlice,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(usersapi.middleware),
})