import React, {useEffect, useRef} from 'react';

function useClick(effectFunc) {
  const element = useRef();
  useEffect(() => {
    const target = element.current;
    console.log(target);
    if (target) {
      target.addEventListener("click", effectFunc);
    }
    return () => {
      if (target) {
        target.removeEventListener("click", effectFunc);
      }
    }
  },[effectFunc])
  return element;
}
export default useClick;

/*
function App() {
  const sayHello = () => console.log("hello world");
  const hoverTarget = useClick(sayHello);
  return (
    <div className="wrapper">
      <h1 ref={hoverTarget}>hello world</h1>
    </div>
  )
}
*/