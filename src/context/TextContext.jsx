import { createContext, useState, useEffect } from 'react';
import tasksFromJson from '../data/task.json';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: task.title,
                description: task.description,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    useEffect(() => {
        setTasks(tasksFromJson);
    }, []);

    return (
        <>
            <TaskContext.Provider
                value={{
                    tasks,
                    createTask,
                    deleteTask,
                }}
            >
                {props.children}
            </TaskContext.Provider>
        </>
    );
}
