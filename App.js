import React,{ useState, useEffect } from 'react';
import { NewTodoFrom} from './NewTodoFrom';
import { TodoList } from './TodoList';
import './App.css';


function App() {
    const[todos, setTodos] = useState([]);

    useEffect{() =>
        fetch('/todos')
            .then[response => response.json()]
            .then(todos => setTodos(todos));
    },[]};

    const createNewTodo = newTodoText => { 
        fetch('/todos => setTodos(todos));
        method: 'post',
        body: json.stringify({newTodoText}),
        headers: {
            'content - Type':'application/json',
        }
    })
        .then(response => response.json())
        .then((updateTodos=> setTodos(updatedTodos));
    }
        alert('Creating new todo with the text: ' +  newTodoText);
    }

    const deleteTodo = todoText => {
        
        fetch('/todos/delete => setTodos(todos));
        method: 'post',
        body: json.stringify({text:todoText}),
        headers: {
            'content - Type':'application/json',
        }
    }

    const isCompletedTodo todoText => {
        fetch('/todos/complete => setTodos(todos));
        method: 'post',
        body: json.stringify({text:todoText}),
        headers: {
            'content - Type':'application/json',
        }
    }
    return {
        <div className="App">
        <h1> My Todos App </h1>
        <NewTodoFrom onClickCreate={createNewTodo} />
        <TodoList
            todos ={}
            onCompleteTodo{completeTodo}
            onDeleteTodo{deleteTodo} />
        </div>
    };
}

export default App;