import { useSelector } from 'react-redux';

export const TodoList = () => {
    const tasks = useSelector((state) => state.tasks.tasksList);

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task.text}</li>
            ))}
        </ul>
    );
};