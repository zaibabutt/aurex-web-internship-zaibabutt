import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      textDecoration: task.completed ? 'line-through' : 'none',
      opacity: task.completed ? 0.6 : 1
    }}>
      <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer', flexGrow: 1 }}>
        {task.text}
      </span>
      <div>
        <button onClick={() => toggleTask(task.id)} style={{ marginRight: '5px' }}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)} style={{ color: 'red' }}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;