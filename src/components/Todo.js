import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodoAction,
  RemoveTodoAction,
} from "../components/redux store/action/TodoActions"; // Import the AddTodoAction function

const Todo = () => {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const RemoveHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };
  return (
    <div>
      <h2>Todo list App using Redux store</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your Todo"
          style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 25,
            fontSize: 15,
            marginLeft: 20,
          }}
        >
          Go
        </button>
      </form>
      <ul className="AllTodos">
        {todos &&
          todos.map((t) => (
            <li key={t.id} className="SingleTodo">
              <span className="todoText">{t.todo}</span>
              <button
                style={{
                  borderRadius: 25,
                  marginLeft: 30,
                  padding: 10,
                  border: "lpx solid white",
                  color: "white",
                  backgroundColor: "orangered",
                }}
                onClick={() => RemoveHandler(t)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Todo;
