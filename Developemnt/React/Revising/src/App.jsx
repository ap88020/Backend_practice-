import { useEffect, useState } from "react"
import AddTodo  from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  const [editTodo, setEditTodo] = useState(null);
  return (
    <>
      < AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      < Todos setEditTodo={setEditTodo} />
    </>
  )
}


export default App
