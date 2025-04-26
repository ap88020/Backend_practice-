import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { removeTodo } from '../feature/todo/todoSlice';

const Todos = () => {
    const Todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <>
        <div>
            Todos
            {
                Todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))} >X</button>
                    </li>
                ))
            }
        </div>
    </>
  )
}

export default Todos;