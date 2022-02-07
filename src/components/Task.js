import React from "react";

//2.1.0
//give function Task() props, {text, category}

//2.1.1
//in the JSX, have the label tag receive {category} and text tag receive {text}
//they should render on the page for each Task

//2.2.0
//to delete a task, an onClick handler is needed on the function


function Task({ text, category, handleDelete }) {



  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete" >X</button>
    </div>
  );
}

export default Task;
