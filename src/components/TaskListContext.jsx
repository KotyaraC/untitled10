import React, { createContext, useContext, useState } from "react";

const TaskListContext = createContext();

export const TaskListProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task }]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskListContext.Provider>
    );
};

export const useTaskList = () => useContext(TaskListContext);
