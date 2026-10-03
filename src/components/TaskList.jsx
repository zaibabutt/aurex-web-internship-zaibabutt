import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center' }}>No tasks available. Add some!</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '400px', margin: '0 auto' }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;