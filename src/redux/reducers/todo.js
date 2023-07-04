import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, note: 'Makan enak sampe kenyang', completed: false },
        { id: 2, note: 'Mandi sampe wangi', completed: false },
        { id: 3, note: 'Nafas biar tetep hidup', completed: true },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                note: action.payload.note,
                completed: false,
            };
            state.push(newTodo);
        }
    }
})

export const { addTodo } = todo.actions;

export default todo.reducer;