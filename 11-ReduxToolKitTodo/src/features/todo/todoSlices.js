import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos : [{ id : 1, text : "Do your homework."}]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((tood) => {todoSlice.id !== action.payload})
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.reducer

