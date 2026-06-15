import React, {useEffect,useState} from "react"

export function useFetch(url){
    const [finalData,setFinalData] = useState({})

    const getDetails = async() =>{
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json) ;
    }

    useEffect(()=>{
        getDetails();
    },[url])

    return {
        finalData
    }
}