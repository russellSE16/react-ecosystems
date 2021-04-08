import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => (
            <TodoListItem 
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed} 
            />
        ))}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);