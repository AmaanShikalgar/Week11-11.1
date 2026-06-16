import React, {useState} from "react";
import { usePrev } from "./hooks/use-prev";

function App(){

    function useDebounce(){
      const currentClock = useRef();
      
      const fn = ()=>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFn,30);
      }
      useEffect(()=>{

      })
    }

    const searchBackend=()=>{
      fetch("api.amazon.com/search/")
    }

    const debounceFn = useDebounce(searchBackend);

    return(
      <>
        <input type="text" onChange={debounceFn}/>
      </>
    )
}

export default App;
















// function App(){
//   const[state,setState] =useState(0);
//   const prev = usePrev(state);

//   return(
//     <>
//     <p>{state}</p>
//     <button onClick={()=>setState(curr=>curr+1)}>Click ME</button>
//     <p>THe previous value was {prev} </p>
//     </>
//   )
// }

// export default App;

// function App (){

//   const[currentPost,setCurrentPost] = useState(1);
//   const {finalData,loading} = useFetch("https://jsonplaceholder.typicode.com/todos/"+ currentPost);

//   if(loading){
//     return<div>
//       Loading........
//     </div>
//   }

//   return (
//     <div>
//       <button onClick={()=>setCurrentPost(1)}>1</button>
//       <button onClick={()=>setCurrentPost(2)}>2</button>
//       <button onClick={()=>setCurrentPost(3)}>3</button>
//       {JSON.stringify(finalData)}
//     </div>
//   )
// }

// export default App

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

