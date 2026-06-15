import React, {useEffect,useState} from "react"
import { useFetch} from "./hooks/useFetch"

function App (){

  const[currentPost,setCurrentPost] = useState(1);
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/todos/"+ currentPost);

  return (
    <div>
      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
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

