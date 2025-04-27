import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../feature/todo/todoSlice';

const AddTodo = ({editTodo, setEditTodo}) => {

    const [input , setInput] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.text);
        }
    },[setEditTodo]);

    const inputHandler = (e) => {
        e.preventDefault();
        if(editTodo){
            dispatch(updateTodo({id : editTodo.id , text: input}));
            setEditTodo(null);
        }else{
            dispatch(addTodo(input));
        }
        setInput('');
    }

    return (
        <div className='flex justify-center items-center'>
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
                    { editTodo ? "Update" : "Add" }
                </button>
            </div>
        </form>
        </div>
    );
};

export default AddTodo;