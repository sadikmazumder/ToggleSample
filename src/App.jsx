import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  //define state
  const [data, setData] = useState()
  const [show, setShow] = useState(false) 


  function  OnInputChange(val){

    setData(val.target.value)
    //console.log(val.target.value)
  }

  function onButtonClick(){
    setShow(!show)
  }

  return (
    <div className="App">
      
        <h1>{data}</h1>
        <input type="text" onChange={OnInputChange} ></input><br/>  
        {
         show?<h1> Welcome to Website -{data}</h1> : null 
        }
       
        
       <button onClick={onButtonClick}> {show ? 'Hide' : 'Show' } </button>  
      
    </div>
  )
}

export default App;
