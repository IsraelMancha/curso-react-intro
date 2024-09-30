import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { NotFound } from "../NotFound";
import { EmptyStateMessage } from "../EmptyStateMessage";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoContext } from "../TodoContext";

function AppUi() {

  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodos,
    deleteTodos, 
    openModal,
    setOpenModal,  
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />

      <TodoSearch />

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && !totalTodos && <EmptyStateMessage />}
            {!searchedTodos.length && totalTodos.length && <NotFound />}

            {searchedTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                />
              );
            })}
          </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUi };
