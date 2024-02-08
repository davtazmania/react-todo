import { useState } from 'react';

export function Counter(){
    const [count, setCount] = useState(0);
    function click() {
      setCount(count + 1)
    }
    return (
    <body>
    
      <div className="titles" >
        <h1>Counter App</h1>
        <h2>{count}</h2>
      </div>
      <div className="Buttons">
      <button onClick={click}> increment</button>
      <button>decrement</button>
      </div>
    </body>)
}