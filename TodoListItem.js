import React from 'react';

export const TodoListItem =({ todo.onClickComplete, onClickDelete })  => {
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted ? <p> Completed!!!</p> : null}
        <btton 
            onclick ={() => onClickComplete(todo.text)}
        > Mark As Complete </btton>
        <button 
            onclick={() => onClickDelete(todo.text)}
        > Delete </button>
    </div> 
};