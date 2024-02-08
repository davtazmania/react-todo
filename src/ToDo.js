
import { useState } from 'react';
export function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('')
    function click() {
        if(inputValue===''){
            return;
        }
        setTasks([...tasks,inputValue])
        setInputValue('')
        
        
      }
      function change(event){
        setInputValue(event.target.value)
      }


    
    return(
        
    <div className="TaskBoard">
            <div className="SubmitForm">
                <input onChange={change} value={inputValue}/>
                <button onClick={click}> add </button>
            </div>
            <div className="TaskList">
                {tasks.map(task => <div className="Task">{task}</div>)}
                
                

            </div>
    </div>
        
        )
}