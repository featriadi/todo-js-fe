import { configureStore } from "@reduxjs/toolkit";
import todos from "./reducers/todo";

export default configureStore({
    reducer: {
        todos
    }
})