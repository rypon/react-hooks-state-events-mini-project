import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

//1.1.0
//give <TaskList/> props for task, that takes TASKS data that was already imported :<TaskList tasks={TASKS} />
// go to TaskList.js and give the props




import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
