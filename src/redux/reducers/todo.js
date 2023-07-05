import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk(
    'todos/getTodo',
    async () => {
        const res = await fetch('http://localhost:8000/');
        if (res.ok) {
            const todos = await res.json();
            return { todos };
        }
    }
);

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (payload) => {
        const res = await fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                note: payload.note
            })
        })

        if (res.ok) {
            const todo = await res.json();
            return { todo };
        }
    }
)

export const completeTodo = createAsyncThunk(
    'todos/completeTodo',
    async (payload) => {
        const res = await fetch(`http://localhost:8000/${payload._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                note: payload.note,
                completed: payload.completed
            })
        })

        if (res.ok) {
          const todo = await res.json();
          return { _id: todo._id, completed: todo.completed }
        }
    } 
);

export const todos = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
    },
    extraReducers: {
        [getTodo.fulfilled]: (state, action) => {
            return action.payload.todos;
        },
        [addTodo.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
        [completeTodo.fulfilled]: (state, action) => {
            const index = state.findIndex((todo) => todo._id === action.payload._id);
			state[index].completed = action.payload.completed;
        }
    }
})

export const {
    toggleComplete
} = todos.actions;
export default todos.reducer;