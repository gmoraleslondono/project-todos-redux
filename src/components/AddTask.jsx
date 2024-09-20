import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks"

export const AddTask = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length === 0) {
            alert("Enter a task before adding !!");
            setValue("");
            return;
        }

        dispatch(
            addTask({
                task: value,
                completed: false,
            })
        );

        setValue("");

    }

    return (
        <div className="add-task-container">
            <input
                type="text"
                className="task-input"
                placeholder="Add a task"
                value={value}
                onChange={handleInputChange}
            />

            <button className="add-task-button" onClick={onSubmit}>
                Save
            </button>
        </div>
    )
}