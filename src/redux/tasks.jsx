import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
name: 'tasks',
initialState: [],
reducers: {
    addTask: (state, action) => {
        console.log('add a task')
        const newTask = {
            id: new Date(),
            text: action.payload.task,
            completed: action.payload.completed,
        }
        state.push(newTask);
    },
    deleteTask: (state, action) => {
        console.log('deleta a task')
    }
}
})

export const {addTask, deleteTask} = tasks.actions;

export default tasks.reducer;
