// src/components/TaskList.jsx
import React, { useState } from 'react';
const TaskList = () => {
    const [tasks, setTasks] = useState([]);


    // Simulación de carga de datos desde una API con useEffect
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

    return (
        <div className="container mt-8">
            <h2>Lista de Tareas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;