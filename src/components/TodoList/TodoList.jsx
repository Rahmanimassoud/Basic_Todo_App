import React, { useEffect } from "react";
import Todo from "../Todo/Todo";

const TodoList = ({todos, addTodo, completeTodo, editTodoText, deleteTodo,
}) => {

  return (
    <>
      <h1>Create Todo</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          e.key === "Enter" && addTodo(e);
        }}
      />
      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
          </ul>
          <h1>Completed Items </h1>
          <ul className="todolist">
            {todos
              .filter((i) => i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
          </ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  );
};

export default TodoList;

