import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  //define state
  const [data, setData] = useState()
  const [show, setShow] = useState(false) 


  function  getData(val){

    setData(val.target.value)
    //console.log(val.target.value)
  }


  return (
    <div className="App">
      
        <h1>{data}</h1>
        <input type="text" onChange={getData} ></input><br/>  
        {
         show?<h1> Welcome to Website -{data}</h1> : null 
        }
       
        
       <button onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show' }</button>  
      
    </div>
  )
}

export default App;
