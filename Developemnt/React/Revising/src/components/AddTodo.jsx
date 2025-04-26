import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

const AddTodo = () => {

    const [input , setInput] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }


    return (
        <form
            onSubmit={inputHandler} 
            className="flex items-center gap-4 p-6 flex-center">
            <input
                type="text"
                placeholder="Enter todo..."
                className="border border-gray-300 rounded-md p-2 w-72 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <div className="flex gap-4">
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddTodo;
