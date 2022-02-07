import React, { useState } from "react";
import Task from "./Task";

//1.1.1
//give TaskList props, function TaskList({tasks})
//consolelog to test: console.log("TaskList.js", tasks)

//1.2.0
//create a function that will map through the tasks array (renderTasks)
//it will return the <Task /> component with the porps being text and category
//also need a key, would be most unique key or index
//now import <Task/> at the top since we are using it in the return

//1.2.1
//Invoke the new renderTasks function inside the TaskList return

//1.2.3 (end of first deliverable)
//now that <Task /> has props of text and category, send them to Task.js 

function TaskList({ tasks }) {

  const [currentTaskList, setCurrentTaskList] = useState(tasks)

  function handleDelete(e) {
    const selectedValue = e.target.parentElement.children[1].innerText
    const updatedTaskList = currentTaskList.filter(task => task.text !== selectedValue)

    setCurrentTaskList(updatedTaskList)
    console.log(updatedTaskList)
  }

  function renderTasks() {
    return currentTaskList.map(task => {
      return (
        <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
      );
    })
  }

  return (
    <div className="tasks">
      {renderTasks()}
    </div>
  );
}

export default TaskList;

