import { useState ,useEffect} from 'react'
import { QueryClient } from '@tanstack/react-query';
import './App.css'
const queryClient = new queryClient();


async function getter(){
  const data=await fetch("https://jsonplaceholder.typicode.com/posts");
  const response=await data.json();
  return response;
}

function App() {
  

  return (
    <>
     {posts.map(post=> <div key={post.id}>{post.title}</div>)}
    </>
  )
}

export default App
