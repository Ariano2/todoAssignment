import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskBar from './TaskBar';

const Task = () => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState();
  const [taskArray, setTaskArray] = useState([
    { task: 1, timeStamp: 1234 },
    { task: 2, timeStamp: 1235 },
    { task: 3, timeStamp: 1236 },
    { task: 4, timeStamp: 1237 },
  ]);
  return (
    <div>
      <TaskBar
        setTaskArray={setTaskArray}
        editMode={editMode}
        setEditMode={setEditMode}
        editId={editId}
        taskArray={taskArray}
      />
      <TaskList
        taskArray={taskArray}
        setEditMode={setEditMode}
        setTaskArray={setTaskArray}
        setEditId={setEditId}
      />
    </div>
  );
};

export default Task;
