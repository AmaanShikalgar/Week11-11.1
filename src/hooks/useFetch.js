import React, {useEffect,useState} from "react"



export function usePostTitle(){
    const[post,setPost] = useState({})

    const getPosts = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        setPost(json);
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;
}

export function useFetch(url){
    const [finalData,setFinalData] = useState({})

    const getDetails = async() =>{
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json) ;
    }

    useEffect(()=>{
        getDetails();
    },[])

    return {
        finalData
    }
}