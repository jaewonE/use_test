import React, {useState} from 'react';

function useInput(placeholder, inputLimit) {
  const [value, setValue] = useState(" ");
  const onChange = (e) => {
    const inputValue = e.target.value;
    if(typeof(inputLimit) === 'function') {
      if(inputLimit(inputValue)) {
        setValue(inputValue);
      }
    }
  }
  return {value, onChange, placeholder};
}
export default useInput;

/*
function App() {
  const inputLimit = (input) => input.length <= 10;
  const getUseInput = useInput("What is your name", inputLimit);
  return (
    <div className="wrppaer">
      <input {...getUseInput}/>
      <br/>
      <h1>{getUseInput.value}</h1>
    </div>
  )
}
*/