import { useState, useContext } from 'react';
import { TaskContext } from '../context/TextContext';

function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTask } = useContext(TaskContext);

    const hanldeSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="max-w-md mx-auto">
            <form
                onSubmit={hanldeSubmit}
                className="bg-slate-800 p-10 mb-4 rounded-md mx-auto"
            >
                <h1 className='text-2xl font-bold text-white mb-3'>Crear tarea</h1>
                <input
                    type="text"
                    placeholder="Escribe tu tarea"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    value={title}
                    className="mb-2 bg-slate-200 w-full p-3"
                />
                <br />
                <textarea
                    placeholder="Escribe la descripcion"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                    className="bg-slate-200 w-full p-3"
                ></textarea>
                <br />
                <br />
                <button type='submit' className="bg-green-600 text-white rounded-md px-2 py-1 flex mx-auto">
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
