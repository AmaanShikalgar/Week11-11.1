import { useEffect, useRef } from "react"

export const usePrev = (value) =>{
    const ref =useRef();
    console.log("rerender happened")

    useEffect(()=>{
        console.log("updated ref")
        ref.current = value ;
    },[value]);

    console.log("returned" + ref.current)

    return ref.current;
}