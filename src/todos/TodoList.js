import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadTodos, markCompleteRequest, removeTodoRequest } from './thunks';
import { getCompleteTodos, getIncompleteTodos, getTodosLoading } from './selectors';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completeTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => (
                <TodoListItem 
                    key={todo.id}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletePressed={onCompletePressed} 
                />
            ))}
            <h3>Complete:</h3>
            {completeTodos.map(todo => (
                <TodoListItem 
                    key={todo.id}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletePressed={onCompletePressed} 
                />
            ))}
        </ListWrapper>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completeTodos: getCompleteTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});
const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);