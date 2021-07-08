import React, {useState, useEffect} from 'react';

function useNetwork() {
  const [netState, setNetState] = useState(navigator.onLine);
  useEffect(()=> {
    const handleNetworks = () => setNetState(navigator.onLine);
    window.addEventListener("online", handleNetworks);
    window.addEventListener("offline", handleNetworks);
    return ()=> {
      window.removeEventListener("online", handleNetworks);
      window.removeEventListener("offline", handleNetworks);
    }
  },[])
  return netState;
}
export default useNetwork;

/*
function App() {
  let onlineState = useNetwork();
  return (
    <div className="wrapper">
      <h1>hello world</h1>
      {onlineState ? <h3>online</h3> : <h3>offline</h3>}
    </div>
  )
}
*/