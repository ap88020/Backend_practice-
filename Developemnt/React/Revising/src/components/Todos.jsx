import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo  , updateTodo } from '../feature/todo/todoSlice';

const Todos = ({setEditTodo}) => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Todos</h2>
                    <ul className="space-y-4">
                        {todos.map((todo) => (
                            <li
                                key={todo.id}
                                className="flex items-center justify-between border-b pb-2"
                            >
                                <button
                                    className="text-blue-500 hover:underline text-sm"
                                    onClick={() => setEditTodo(todo)}
                                >
                                    Update
                                </button>

                                <span className="flex-1 text-center font-medium">{todo.text}</span>

                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="text-red-500 hover:text-red-700 font-bold"
                                >
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todos;
