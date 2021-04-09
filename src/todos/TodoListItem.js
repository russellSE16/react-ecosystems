import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {!todo.isCompleted && <button 
                onClick={() => onCompletePressed(todo.id)}
                className="completed-button"
            >Mark As Complete</button>}
            <button 
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button"
            >Remove</button>
        </div>
    </div>
);

export default TodoListItem;