import React, {useEffect, useState} from 'react';
import defaultAxios from 'axios';

function useAxios(opts, axioaInstance = defaultAxios) {
  const [state, setState] = useState({
    loading : true,
    error: null, 
    data: null
  });
  useEffect(()=> {
    if(!opts.url) {
      return;
    }
    axioaInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading : false,
          data
        });
      })
      .catch(error => {
        setState({
          ...state,
          loading : false,
          error
        });
      });
  },[]);
  return state;
}

export default useAxios;

/*
function App() {
  const {loading, error, data} = useAxios({url: "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"});
  if(!loading && error === null) {
    console.log("data: " + JSON.stringify(data));  
  }else {
    console.log(error);
  }

  return (
    <div className="wrapper">
      <h1>hello world</h1>
    </div>
  )
}
*/