
import {http,createConfig,useConnect} from "wagmi";
import {mainnet,base} from "wagmi/chains";
import {injected,metaMask,safe} from "wagmi/connectors";
import { QueryClient,QueryClientProvider} from "@tanstack/react-query";
import { WagmiProvider } from 'wagmi';



const queryClient=new QueryClient();


export const config=createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    metaMask(),
    safe(),
  ],
  transports:{
    [mainnet.id]:http(),
    [base.id]:http(),
    
  },
})
function App() {
  
  return (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <WalletNotification/>  
      <EthSend/>
    </QueryClientProvider>
  </WagmiProvider>

  )
}

function EthSend(){
  return(
    <div>
      <input type="text" placeholder="addres......"></input>
      <button>Send Etherium...</button>
    </div>
  )
}



function WalletNotification(){
  const {connectors,connect}=useConnect();
  console.log(connectors);
  return connectors.map((connector)=>(
    <button key={connectors.uid} onClick={()=>connect({connector})}>
      {connector.name}
    </button>
  ))
}



export default App

// //chat
// import './App.css';
// import { http, createConfig, useConnect } from 'wagmi';
// import { mainnet, base } from 'wagmi/chains';
// import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { WagmiProvider } from 'wagmi';

// const queryClient = new QueryClient();

// const projectId = '<WALLETCONNECT_PROJECT_ID>';
// export const config = createConfig({
//   chains: [mainnet, base],
//   connectors: [
//     injected(),
//     metaMask(),
//     walletConnect({ projectId }),
//     safe(),
//   ],
//   // Removed the transports configuration as it is not part of createConfig parameters.
//   // transports: {
//   //   [mainnet.id]: http(),
//   //   [base.id]: http(),
//   // },
// });

// function App() {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}> {/* Changed from config={queryClient} to client={queryClient} */}
//         <WalletNotification />
//         <Ethsend />
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }

// function Ethsend() {
//   return (
//     <>
//       <input type="text" placeholder="address..." /> {/* Fixed the placeholder text */}
//       <button>Send ETH</button>
//     </>
//   );
// }

// function WalletNotification() {
//   const { connectors, connect } = useConnect();
//   return (
//     <div>
//       {connectors.map((connector) => (
//         <button key={connector.id} onClick={() => connect({ connector })}> {/* Changed from connectors.uid to connector.id */}
//           {connector.name}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default App;

