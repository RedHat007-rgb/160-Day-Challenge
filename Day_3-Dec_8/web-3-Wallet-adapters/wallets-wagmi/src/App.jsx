import { createPublicClient } from 'viem'
import { mainnet} from 'viem/chains';
import {http} from 'viem';
import './App.css'



const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});


function App() {

  async function getBalance(){
    const res=await client.getBalance({address:"0x7a76E0eb90f96690962D67AcBC6c7631d951eff0"})
    console.log(res);
  }

  async function getBlockNumber(){
    const blockNumber=await client.getBlockNumber();
    console.log(blockNumber);
  }
  return (
  <div>
    <button onClick={getBalance}>Get balance</button>
    <button onClick={getBlockNumber}>Get bLOCK nuMBER</button>
  </div>

  )
}


export default App

//   const [posts,setPosts]=useState([]);
//   const [titless,setTitle]=useState([]);
  
//   async function getPosts(){
//     const response= await fetch("https://jsonplaceholder.typicode.com/posts");
    
//     const data= await response.json();
//     setPosts(data);
//   }
  // useEffect(()=>{
  //   setTimeout(()=>{getPosts(),5000});
  // },[]);
  
//   useEffect(()=>{
//     let titles=[];
//     for(let i=0;i<posts.length;i++){
//       console.log(posts[i].title)
//       titles.push(posts[i].title)
//       setTitle(titles);
//     }
//     console.log(titles)
// },[posts])


// function Posts(){

//   const {data,isloading,error}=useQuery({queryKey:["posts"],queryFn:getter})

//   if(error){
//     return <div>
//       Error while fetching...
//     </div>
//   }

//   if(isloading){
//     return <div>
//       loading.....
//     </div>
//   }

//   if(data){
//     return <div>
//       {JSON.stringify(data)}
//     </div>
//   }

// }