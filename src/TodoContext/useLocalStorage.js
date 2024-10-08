import React from "react";

//  custom hook
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itemName, initialValue])

  const saveItem = (newItem) => {
    // setTodos(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
   item, 
   saveItem, 
   loading, 
   error, 
  }
}

export { useLocalStorage }


// localStorage.removeItem('TODOS_V1');

//   const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar curso de react.js", completed: false },
//     { text: "Leer la Biblia", completed: true },
//     { text: "bailar salsa", completed: false },
//   ];

//   localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));