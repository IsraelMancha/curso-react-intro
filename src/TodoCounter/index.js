import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
function TodoCounter() {
  const { 
    totalTodos, 
    completedTodos 
  } = React.useContext(TodoContext);

  return totalTodos === completedTodos && totalTodos > 0 ? (
    <h1 className="TodoCounter">
      {" "}
      <span>Felicidades, completaste todas las tareas!! 🎉</span>
      <br />
      ({completedTodos} de {totalTodos}) 
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
