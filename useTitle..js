import React, {useState, useEffect, useRef} from 'react';

function useTitle(input, useTitleTarget) {
  const [title, setTitle] = useState(input);
  const updateTitle = () => {
    useTitleTarget.current.innerText = title;
  }
  useEffect(updateTitle, [title, useTitleTarget]);
  return setTitle;
}

export default useTitle;
/*
function App() {
  const useTitleTarget = useRef();
  const titleUpdater = useTitle("Loading...", useTitleTarget);
  
  return (
    <div className="wrapper">
      <h1 ref={useTitleTarget}>title</h1>
      <button onClick={()=>titleUpdater("user1")}>user1</button>
      <button onClick={()=>titleUpdater("user2")}>user2</button>
    </div>
  )
}
*/