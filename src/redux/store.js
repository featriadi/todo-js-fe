import { configureStore } from "@reduxjs/toolkit";
import todo from "./reducers/todo";

export default configureStore({
    reducer: {
        todo
    }
})