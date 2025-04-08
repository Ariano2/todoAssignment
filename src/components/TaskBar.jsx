import React, { useState } from 'react';

const TaskBar = ({
  taskArray,
  setTaskArray,
  setEditMode,
  editId,
  editMode,
}) => {
  const [taskValue, setTaskValue] = useState('');
  const addTask = () => {
    const timeStamp = Date.now();
    setTaskArray((taskArray) => [...taskArray, { task: taskValue, timeStamp }]);
    setTaskValue('');
  };
  const editTask = () => {
    const newArray = taskArray.filter((task) => task.timeStamp != editId);
    newArray.push({ task: taskValue, timeStamp: parseInt(editId) });
    setTaskArray(newArray);
    setEditMode(false);
    setTaskValue('');
  };
  return (
    <div className="flex gap-4 w-2/3 my-4 mx-auto">
      <input
        type="text"
        placeholder={editMode ? 'edit task here' : 'add a task'}
        className="grow p-2 bg-neutral rounded-lg"
        value={taskValue}
        onChange={(e) => {
          setTaskValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!editMode) addTask();
          else editTask();
        }}
        className="p-2 rounded-lg bg-primary"
      >
        {editMode ? 'Edit Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default TaskBar;
