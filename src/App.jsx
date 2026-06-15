import React, {useEffect,useState} from "react"
import { useFetch,usePostTitle } from "./hooks/useFetch"

function App (){
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>{JSON.stringify(finalData)}</div>
  )
}

export default App



// function useCounter(){ //custom hooks
//   const[count,setCount] = useState(0)

//   const increaseCount=()=>{
//     setCount(count=>count+1)
//   }

//   return{
//     count: count,
//     increaseCount: increaseCount}
// }

// function App() {
//   return(
//     <div>
//     <Counter/>
//     <Counter/>
//     <Counter/>
//     <Counter/>
//     </div>
//   )
// }

// const Counter = ()=>{
//   const{count,increaseCount} = useCounter();
//   return(
//     <div>
//       {count}
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>
// )}

