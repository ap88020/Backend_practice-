import { useEffect, useState } from "react"
import AddTodo  from "./components/AddTodo"
import Todos from "./components/Todos"
import Otpage from "./OTP/Otpage"

function App() {
  // const [editTodo, setEditTodo] = useState(null);
  return (
    <>
      {/* < AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      < Todos setEditTodo={setEditTodo} /> */}
      < Otpage />
    </>
  )
}


export default App
