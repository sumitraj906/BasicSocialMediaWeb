import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import { useState } from "react";

import TodoItems from "./component/TodoItems";
import "./App.css";

function App() {
  const intialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  const [todoItems, setTodoItems] = useState(intialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`NewItemAdded:${itemName} date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item=>item.name!=todoItemName);
    setTodoItems(newTodoItems);
  // console.log("item deleted")
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {/* <WelcomeMessage todoItems={todoItems}></WelcomeMessage> */}
      <TodoItems todoItems={todoItems}onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
