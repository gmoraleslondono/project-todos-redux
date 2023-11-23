import { createSlice } from '@reduxjs/toolkit'

const tasksList = [
    { id: 1, text: 'Watch video on actions & reducers', completed:   true },
    { id: 2, text: 'Follow redux codealong', completed: true },
    { id: 3, text: 'Fork weekly assignment', completed: true },
    { id: 4, text: 'Create a todo app', completed: false },
]

const initialState = {
    tasksList,
}

export const tasks = createSlice({
name: 'tasks',
initialState,
reducers: {
    addTask: (state, action) => {

    },
    deleteTask: (state, action) => {

    }
}
})

export const {addTask, deleteTask} = tasks.actions;

export default tasks.reducer;
