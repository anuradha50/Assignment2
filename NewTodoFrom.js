import React,{useState} from 'react';
export const NewTodoFrom = ({onClickCreate} )=> {
    const [inputValue, setinputValue] = useState('');
    return{

    
        <div>
            <input type = "text" 
            value = {inputValue}
            onChange = {e => setinputValue(e.target.value)} />>
        
            </input>
            <button 
            onclick ={() => {
                onClickCreate(inputValue);
                setinputValue('');

            }
            
            }
            >
            Create
        
            </button> 
        </div>
    };
}