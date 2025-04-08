import React from 'react';

const TaskList = ({ taskArray, setTaskArray, setEditMode, setEditId }) => {
  function deleteTask(e) {
    const targetId = parseInt(
      e.target.parentNode.parentNode.getAttribute('taskid')
    );
    const newTaskArray = taskArray.filter(
      (elem) => elem.timeStamp !== targetId
    );
    setTaskArray(newTaskArray);
  }
  return (
    <ul className="mx-5 bg-neutral">
      {taskArray.map((elem) => {
        return (
          <li
            className="p-2 bg-primary my-2 text-lg flex flex-col items-center lg:flex-row justify-between"
            key={elem.timeStamp}
            taskid={elem.timeStamp}
          >
            <span className="grow my-4">{elem.task}</span>
            <div className="text-sm lg:text-lg">
              <button
                onClick={deleteTask}
                className="p-2 mx-2 rounded-full hover:animate-pulse bg-error"
              >
                DELETE
              </button>
              <button
                onClick={(e) => {
                  setEditId(
                    e.target.parentNode.parentNode.getAttribute('taskid')
                  );
                  setEditMode(true);
                }}
                className="p-2 mx-2 rounded-full hover:animate-pulse bg-success"
              >
                EDIT
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
