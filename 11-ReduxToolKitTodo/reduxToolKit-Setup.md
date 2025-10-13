## Redux Toolkit Setup

1. import you Redux store where ever you want like this:

```js
import { configureStore } from "@reduxjs/toolkit";
```

2. Create and export store using configureStore method:

```js
export const store = configureStore({
  reducer: {
    // your reducers here
  },
});
```

3. Make a slice and also nanoid(optional) :

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";
```

4. Then define the initial state of the store and create slice using createSlice method:

```js
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
```
5. Export the Reducer and Actions:

```js
export const { addTodo, removeTodo } = todoSlice.actions;
``` 

6. Now to send reducers to the store : 

```js
export default todoSlice.reducer;
``` 
7. Now import the reducer in the store file and add it to the configureStore method:

```js
import todoReducer from "./path/to/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});