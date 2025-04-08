import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import TaskBar from './TaskBar';

const Task = () => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState();
  const loadFromLocalStorage = () => {
    let data = localStorage.getItem('taskList');
    data = JSON.parse(data);
    return data;
  };
  const [taskArray, setTaskArray] = useState(loadFromLocalStorage() || []);
  useEffect(() => {
    const saveToLocalStorage = () => {
      const taskList = JSON.stringify(taskArray);
      localStorage.setItem('taskList', taskList);
    };
    if (taskArray.length > 0) {
      saveToLocalStorage();
    }
  }, [taskArray]);
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
