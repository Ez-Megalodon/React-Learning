import React, {useState} from 'react';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {

        if (newTask === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const removeTask = (index) => {
        const newTasks = tasks.slice();
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Simple To-Do List</h1>
            </header>
            <div className="App-body">
                <input
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="New task..."
                />
                <button onClick={addTask}>Add</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
