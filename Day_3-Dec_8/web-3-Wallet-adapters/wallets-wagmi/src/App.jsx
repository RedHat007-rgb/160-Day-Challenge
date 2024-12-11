
import './App.css'
import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
const queryClient=new QueryClient();//global variable for all the fetches.

async function getter(){
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await data.json();
  return response;
}



function App() {
  // const[posts,setPosts]=useState([]);
  // // const[titles,setTitles]=useState([]);
  // //const[error,setError]=useState();
   
  // async function getPosts(){
  //   try{
  //   const response=await fetch("https://jsnplaceholder.typicode.com/posts");
  //   const json=await response.json();//here we can use axios library also to fetch the data.
  //   setPosts(json); 
  // } catch {
  //   console.log("Url is not correct")
  //   // setError("Url is not defined");
  //   // console.log(error)
  // }

  // } 
  
  // useEffect(function (){
  //  setInterval(function (){
  //   getPosts();
  //  },5000);
  // },[])

  // // useEffect(function(){//This can be used without map function to render a title in the browser.
  // //   let newArray=[];
  // //   for (let i=1;i<posts.length;i++){
  // //     console.log(posts[i].title);
  // //     newArray.push(posts[i].title);
  // //     setTitles(newArray);
  // // }
  // // },[posts])
  

  return (//here we are converting an object to a string using stringify
    <QueryClientProvider client={queryClient}>
      <Posts/>
   </QueryClientProvider>
  )
}

function Posts(){
 
  const {data,isloading,error} =useQuery({queryKey:['posts'],queryFn:getter});
  
  if(error){
    return <div>
      Error while fetching..
    </div>
  }
  if(isloading){
    return <div>
     Loading.....
    </div>
  }
  if(data){
    return <div>
    {data.map((item) => (<div key={item.id}>{item.title}</div>))} 
    </div> 
  }
}
  


export default App

