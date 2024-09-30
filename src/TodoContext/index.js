import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    // add todos
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      });
      saveTodos(newTodos);
    }

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase().trim();
      return todoText.includes(searchText);
    });

    // complete todos
    const completeTodos = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
    // delete todos
    const deleteTodos = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{ 
            loading, 
            error, 
            totalTodos, 
            completedTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            addTodo,
            completeTodos, 
            deleteTodos,
            openModal,
            setOpenModal
            }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };