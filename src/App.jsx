 import React, { useState } from 'react'
 
 const App = () => {
  
  const [count,setcount] = useState(0) 

  function incre(){
    setcount(count+1) 
  }
  function decre(){
    setcount (count-1)
  }
  function add5(){
    setcount(count+5)
  }
  function reset(){
    setcount(0);
  }
  
   return (
     <div>
     <div id='main'>
      <div onClick={incre} id='incr'>
        Increase
      </div>
      <div onClick={decre} id='decr'>
        Decrease
      </div>
      <div onClick={add5} id='add5'>
        Add 5
      </div>

      <button onClick={reset}> RESET</button>
        
     </div>
     <h1>{count}</h1>
     </div>
   )
 }
 
 export default App
 