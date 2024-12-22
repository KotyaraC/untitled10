import React, { useState } from "react";
import { useTaskList } from "./TaskListContext";

const TaskManager = () => {
    const { tasks, addTask, removeTask } = useTaskList();
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask.trim());
            setNewTask("");
        }
    };

    return (
        <div className="task-manager">
            <h5 className="text-center">Список задач</h5>
            <div className="task-input mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Нова задача..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn btn-primary mt-2 w-100" onClick={handleAddTask}>
                    Додати задачу
                </button>
            </div>
            <ul className="list-group">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        {task.text}
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeTask(task.id)}
                        >
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
