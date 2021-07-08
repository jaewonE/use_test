import React, {useState, useEffect} from 'react';

function useScroll() {
  const [locate, setLocate] = useState({x: 0, y: 0});
  useEffect(()=> {
    const getLocate = (e) => {
      setLocate({x: e.path[1].scrollX, y: e.path[1].scrollY});
    }
    window.addEventListener("scroll", getLocate);
    return () => window.removeEventListener("scroll", getLocate);
  },[])
  return locate;
}
export default useScroll;

/*
function App() {
  let locate= useScroll();
  //console.log(locate.y);
  return (
    <div className="wrapper">
      <div style={{height: "200vh"}}></div>
      <h1 style={{position: 'fixed', top: "0px", color: locate.y < 100 ? "red" : "blue"}}>hello world</h1>
    </div>
  )
}
*/