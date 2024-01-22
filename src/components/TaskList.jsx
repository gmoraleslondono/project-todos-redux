import { useSelector } from 'react-redux';

export const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <ul class="task-list">
            {tasks.map((task) => (
                <li className="task" key={task.id}>{task.text}</li>
            ))}
        </ul>
    );
};