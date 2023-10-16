import React from 'react';

const ListeTache = ({ tasks }) => {
  return (
    <div>
      {tasks && tasks.map((task) => (
        <div key={task.id}>
          <span>{task.description}</span>
        </div>
      ))}
    </div>
  );
}

export default ListeTache;
