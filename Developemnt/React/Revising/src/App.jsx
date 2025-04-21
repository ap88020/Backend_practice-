import { useEffect, useState } from "react"

function App() {
  return (
    <>
        <Count></Count>
    </>
  )
}

function Count() {
const [count, setCount] = useState(0);
function increase(){
  setCount(count + 1);
}

useEffect(() => {
  let clock = setInterval(() => {
    console.log("mount");
    setCount(prevCount => prevCount + 1);
  },1000)
  return function (){
    console.log("un mount");
    clearInterval(clock);
  }
},[]);


  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase </button>
    </>
  )
}

export default App
