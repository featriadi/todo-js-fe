import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk(
    'getTodo',
    async (payload) => {
        const data = new URLSearchParams();
        data.append('completed', true)

        const res = await fetch(`https://todo-js-be-production.up.railway.app${ payload.complete === 0 || payload.complete === 1 ? `?completed=${payload.complete}` : '' }`);
        if (res.ok) {
            const todos = await res.json();
            return { todos };
        }
    }
);

export const addTodo = createAsyncThunk(
    'addTodo',
    async (payload) => {
        const res = await fetch('https://todo-js-be-production.up.railway.app/', {
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
    'completeTodo',
    async (payload) => {
        const res = await fetch(`https://todo-js-be-production.up.railway.app/${payload._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                note: payload.note,
                completed: payload.completed
            })
        });

        if (res.ok) {
          const todo = await res.json();
          return { _id: todo._id, note: todo.note, completed: todo.completed }
        }
    } 
);

export const deleteTodo = createAsyncThunk(
    'deleteTodo',
    async (payload) => {
        const res = await fetch(`https://todo-js-be-production.up.railway.app/${payload._id}`, {
            method: 'DELETE'
        });

        if (res.ok) {
            return { _id: payload._id};
        }
    }
)

export const todos = createSlice({
    name: 'todos',
    initialState: [],
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
        },
        [deleteTodo.fulfilled]: (state, action) => {
            return state.filter((todo) => todo._id !== action.payload._id);
        }
    }
})

export default todos.reducer;